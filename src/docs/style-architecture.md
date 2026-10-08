# Style architecture

## Directory responsibilities

- `styles/element-plus.css` imports the neutral Element Plus stylesheet. It does not compile a brand color.
- `styles/foundations.css` only sets the shared Element Plus font-family variable.
- `styles/tokens/company-dark-red.css` owns the company's Dark Red variable names and values. It is the single color source for that theme.
- `styles/themes/*.css` maps runtime themes. `dark-red.css` is an adapter from company variables to Element Plus `--el-*` variables; structural component selectors are forbidden here.
- `styles/overrides/<name>.css` directly overrides the corresponding native Element Plus component.
- `styles/index.css` is the only global style entry and defines the cascade order explicitly.

There are no project-level wrapper components for Button, Checkbox, Tag, Select, Message, or Tabs. The application renders Element Plus components directly; visual customization lives entirely in CSS variables and override stylesheets.

## Variable flow

For Dark Red, the company stylesheet is the only source of company color, background, border, fill, text, mask, and shadow values. `themes/dark-red.css` maps those values to Element Plus `--el-*` variables. The component overrides then target native Element Plus classes directly.

```text
company-dark-red.css → dark-red.css → Element Plus native components → overrides/*.css
```

Light and Dark define their Element Plus `--el-*` variables directly. There is no parallel project-specific color namespace.

## Theme switching

`index.html` starts with `class="light"`. `App.vue` then replaces only the known theme class (`light`, `dark`, or `dark-red`) on `document.documentElement`. Using the document element is required because Element Plus Message and Select poppers are teleported outside the application root.

## Component styling rules

- Render Element Plus components directly; do not add Vue wrapper components solely for styling.
- Use public `--el-*` variables whenever they express the required value.
- In Dark Red-only selectors, use company variables directly when Element Plus has no matching semantic variable.
- Write one-off geometry, layering, and asset dimensions directly in component CSS instead of creating project variables.
- Do not add a second global primary, text, border, or fill palette.
- Component CSS must not contain Dark Red color constants. Theme colors belong in `tokens/company-dark-red.css`; components consume company variables or `--el-*` aliases. Structural keywords such as `transparent` and `currentColor` remain allowed.

## Selector policy

Allowed:

- Public Element Plus root classes such as `.el-select`, `.el-tag`, and `.el-button`.
- Public Element Plus state/type classes when they are part of the documented component API, such as `.el-tag--success`.
- An internal Element Plus part selector inside its matching component stylesheet when no public CSS variable can express the required geometry.

Forbidden:

- Element Plus structural selectors in a theme file.
- Cross-component internal selectors.
- Demo forced-state selectors in component or theme CSS.
- Vue private component registries or Element Plus private installation tables.

## Recorded Element Plus internal DOM dependencies

| File | Internal selector | Reason | Upgrade check |
| --- | --- | --- | --- |
| `overrides/checkbox.css` | `.el-checkbox__input`, `.el-checkbox__inner`, `.el-checkbox__label`, `.el-checkbox-group` | Dark Red needs four corner pixels and 20px checked/indeterminate geometry that public variables cannot fully position; dense groups suppress repeated pixels to preserve label spacing. | Inspect Checkbox DOM/state classes and verify all eight states plus group/form behavior. |
| `overrides/select.css` | `.el-select__wrapper` including its `::before`/`::after`, `.el-select__selected-item`, `.el-select__placeholder`, disabled `.el-tag` | Dark Red requires segmented borders, glow, exact heights, disabled surface, safe ellipsis, and readable disabled single/multiple content. The four-corner segmented frame is a 10px band on each edge holding eight segments, and Hover/Focus move the right-hand ticks, which no public variable can express. | Inspect Select wrapper/state classes and disabled tag markup; compare both decoration rows against the Select component on every state; test sizes, disabled placeholder/value/input/caret, keyboard, multiple, filterable, clearable, remote, and popper. |
| `overrides/message.css` | `.el-message__icon`, `.el-message__content`, `.el-message__closeBtn`, `.el-message__badge` | Element Plus does not expose public variables for the requested icon/text glow and stacking. The stylesheet targets native Message type classes without a wrapper component. | Inspect Message DOM, then test all parameter forms, grouping, handler, closeAll, and live theme changes. |
| `overrides/tabs.css` | `.el-tabs__header`, `.el-tabs__nav-wrap`, `.el-tabs__item`, `.el-tabs__active-bar`, `.el-tabs__content` | Element Plus exposes the header height but not the Figma typography, per-item padding, one-pixel divider, gradient indicator, or glow as public variables. | Inspect Tabs DOM and verify mouse, keyboard, disabled, long-label, overflow, and all three runtime themes. |

Tag and Button styling uses their public root/type classes and CSS variables. Their decorations are root pseudo-elements, so no extra layout shell is required.

## Accessibility decisions and upstream limits

- The company variables do not define a separate dark-effect Tag text token. Dark-effect Tags use Element Plus `--el-color-white`, while Tag colors and borders resolve from the company `--color-*` families in Dark Red mode.
- The design file draws an editable caret in the Select Focus variant. Element Plus renders a caret only for a `filterable` Select, so Dark Red keeps the native behaviour: focusing a non-filterable Select shows no caret.
- The design file defines one Select size, 320 × 40. Element Plus' `small` and `large` variants are kept for existing call sites; they inherit the 320px default width and keep their own height, padding and font size.
- Element Plus 2.14.5 renders every Select multiple-value chip with `ElTag`, whose close button name is the single localized string `el.tag.close` (`Close this tag`). Select exposes a public `tag` slot with `data`, `deleteTag`, and `selectDisabled`, but using it to change the close name would require reconstructing native tag rendering, collapse-tags, disabled-item behavior, sizing, effects, and deletion wiring. There is no public per-tag close-label prop or slot, so the native behavior is retained. On Element Plus upgrades, check for a public close-label API before considering a change.

## Element Plus upgrade checklist

1. Read the installed release notes and public type declarations.
2. Run `npm run type-check` and `npm run build`.
3. Recheck every internal selector listed above against the rendered DOM.
4. Exercise Checkbox group/form, Tag close/click, Select keyboard/popper/remote behavior, and native `ElMessage` parameter forms.
5. Switch Light → Dark → Dark Red while a Select popper and Message are open.
6. Confirm browser console errors, warnings, recursive-component errors, and duplicate registrations are zero.
7. Search for new hard-coded brand colors, cross-component BEM selectors, private registry access, and retired theme names.

## Adding a component style override

1. Create `styles/overrides/<name>.css` and target the native Element Plus root class. Do not add a Vue wrapper solely for styling.
2. Start with public Element Plus variables and record any unavoidable internal part selector in this document.
3. Reuse Element Plus public variables first, then company variables inside a Dark Red selector when necessary. Do not add project-level intermediary variables for one-off component styling.
4. Import the component stylesheet from `styles/index.css` after all token files.
5. Add focused compatibility coverage and complete the upgrade checklist. Input, Table, and Dialog should use the same style-only approach when they enter scope.
