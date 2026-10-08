<template>
  <main class="page">
    <header class="page-header">
      <div>
        <p class="eyebrow">Element Plus 2.14.5</p>
        <h1>Dark Red Component Verification</h1>
        <p>Light / Dark / Dark Red · Raw Element Plus behavior with token-driven decoration</p>
      </div>
      <el-radio-group v-model="theme" aria-label="Theme">
        <el-radio-button value="light">Light</el-radio-button>
        <el-radio-button value="dark">Dark</el-radio-button>
        <el-radio-button value="dark-red">Dark Red</el-radio-button>
      </el-radio-group>
    </header>

    <section class="demo-section">
      <h2>Button · Dark Red state reference</h2>
      <p class="section-note">Primary and Secondary each show Normal, Hover, Click and Disabled. Hover and Click specimens use the same rules as natural button interaction.</p>
      <div class="button-state-matrix" aria-label="Dark Red button state reference">
        <div class="button-state-matrix__head" aria-hidden="true">
          <span></span>
          <span>Primary</span>
          <span>Secondary</span>
        </div>
        <div class="button-state-matrix__row">
          <span class="button-state-matrix__label">Normal</span>
          <el-button type="primary">Button</el-button>
          <el-button>Button</el-button>
        </div>
        <div class="button-state-matrix__row">
          <span class="button-state-matrix__label">Hover</span>
          <el-button class="button-specimen--hover" type="primary">Button</el-button>
          <el-button class="button-specimen--hover">Button</el-button>
        </div>
        <div class="button-state-matrix__row">
          <span class="button-state-matrix__label">Click</span>
          <el-button class="button-specimen--active" type="primary">Button</el-button>
          <el-button class="button-specimen--active">Button</el-button>
        </div>
        <div class="button-state-matrix__row">
          <span class="button-state-matrix__label">Disabled</span>
          <el-button type="primary" disabled>Button</el-button>
          <el-button disabled>Button</el-button>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Tabs · native interaction</h2>
      <p class="section-note">Dark Red follows the Figma reference; Light and Dark reuse their own semantic theme variables.</p>
      <div class="tabs-reference-host">
        <el-tabs v-model="activeTab">
          <el-tab-pane label="Tab1" name="tab-1">Tab1 content</el-tab-pane>
          <el-tab-pane label="Tab2" name="tab-2">Tab2 content</el-tab-pane>
          <el-tab-pane label="Tab3" name="tab-3">Tab3 content</el-tab-pane>
        </el-tabs>
      </div>
      <div class="compatibility-block">
        <h3>Disabled state and longer labels</h3>
        <div class="tabs-compat-host">
          <el-tabs v-model="compatibilityTab">
            <el-tab-pane label="Overview" name="overview">Overview content</el-tab-pane>
            <el-tab-pane label="Activity stream" name="activity">Activity content</el-tab-pane>
            <el-tab-pane label="Disabled" name="disabled" disabled>Disabled content</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Steps · progress</h2>
      <div class="compatibility-block">
        <h3>Horizontal</h3>
        <div class="steps-demo steps-demo--horizontal">
          <el-steps :active="2" finish-status="success">
            <el-step title="Account" description="Create your profile" />
            <el-step title="Details" description="Add project details" />
            <el-step title="Review" description="Check your information" />
            <el-step title="Complete" description="Ready to launch" />
          </el-steps>
        </div>
      </div>
      <div class="compatibility-block">
        <h3>Vertical</h3>
        <div class="steps-demo steps-demo--vertical">
          <el-steps direction="vertical" :active="2" finish-status="success">
            <el-step title="Account" description="Create your profile" />
            <el-step title="Details" description="Add project details" />
            <el-step title="Review" description="Check your information" />
            <el-step title="Complete" description="Ready to launch" />
          </el-steps>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Checkbox · 8 states</h2>
      <p class="section-note">Fixed specimens show the complete matrix; the compatibility row below uses real interaction.</p>
      <div class="state-grid checkbox-grid">
        <div class="demo-state">
          <span class="state-label">Default</span>
          <el-checkbox v-model="checkboxDefault">Checkbox label</el-checkbox>
        </div>
        <div class="demo-state demo-force-hover">
          <span class="state-label">Hover</span>
          <el-checkbox v-model="checkboxHover">Checkbox label</el-checkbox>
        </div>
        <div class="demo-state demo-force-focus">
          <span class="state-label">Focus</span>
          <el-checkbox v-model="checkboxFocus">Checkbox label</el-checkbox>
        </div>
        <div class="demo-state">
          <span class="state-label">Checked</span>
          <el-checkbox v-model="checkboxChecked">Checkbox label</el-checkbox>
        </div>
        <div class="demo-state">
          <span class="state-label">Indeterminate</span>
          <el-checkbox v-model="checkboxIndeterminate" indeterminate>Checkbox label</el-checkbox>
        </div>
        <div class="demo-state">
          <span class="state-label">Disabled</span>
          <el-checkbox disabled>Checkbox label</el-checkbox>
        </div>
        <div class="demo-state">
          <span class="state-label">Disabled Indeterminate</span>
          <el-checkbox disabled indeterminate>Checkbox label</el-checkbox>
        </div>
        <div class="demo-state">
          <span class="state-label">Disabled Checked</span>
          <el-checkbox :model-value="true" disabled>Checkbox label</el-checkbox>
        </div>
      </div>
      <div class="compatibility-block">
        <h3>Checkbox group / form</h3>
        <el-form :model="formModel" label-position="top">
          <el-form-item label="Permissions">
            <el-checkbox-group v-model="formModel.permissions">
              <el-checkbox value="read">Read</el-checkbox>
              <el-checkbox value="write">Write</el-checkbox>
              <el-checkbox value="admin" disabled>Admin</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
    </section>

    <section class="demo-section">
      <h2>Radio · single selection</h2>
      <div class="state-grid checkbox-grid">
        <div class="demo-state">
          <span class="state-label">Default</span>
          <el-radio v-model="radioDefault" value="first">Radio label</el-radio>
        </div>
        <div class="demo-state demo-force-hover">
          <span class="state-label">Hover</span>
          <el-radio v-model="radioHover" value="first">Radio label</el-radio>
        </div>
        <div class="demo-state demo-force-focus">
          <span class="state-label">Focus</span>
          <el-radio v-model="radioFocus" value="first">Radio label</el-radio>
        </div>
        <div class="demo-state">
          <span class="state-label">Checked</span>
          <el-radio v-model="radioChecked" value="first">Radio label</el-radio>
        </div>
        <div class="demo-state">
          <span class="state-label">Disabled</span>
          <el-radio disabled>Radio label</el-radio>
        </div>
      </div>
      <div class="compatibility-block">
        <h3>Radio group</h3>
        <el-radio-group v-model="radioGroupValue">
          <el-radio value="alpha">Alpha</el-radio>
          <el-radio value="beta">Beta</el-radio>
          <el-radio value="gamma">Gamma</el-radio>
        </el-radio-group>
      </div>
    </section>

    <section class="demo-section">
      <h2>Switch · state reference</h2>
      <div class="state-grid checkbox-grid">
        <div class="demo-state">
          <span class="state-label">Off</span>
          <el-switch v-model="switchOff" />
        </div>
        <div class="demo-state">
          <span class="state-label">On</span>
          <el-switch v-model="switchOn" />
        </div>
        <div class="demo-state">
          <span class="state-label">Disabled</span>
          <el-switch v-model="switchDisabled" disabled />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Tag · semantic types</h2>
      <div class="demo-row">
        <el-tag>Primary</el-tag>
        <el-tag type="success">Success</el-tag>
        <el-tag type="warning">Warning</el-tag>
        <el-tag type="danger">Error / danger</el-tag>
        <el-tag type="info">Info</el-tag>
      </div>
      <div class="compatibility-block">
        <h3>Sizes, effects and events</h3>
        <div class="demo-row">
          <el-tag size="small" effect="plain">Small / plain</el-tag>
          <el-tag effect="light" round>Default / light</el-tag>
          <el-tag size="large" effect="dark" hit>Large / dark</el-tag>
          <el-tag closable @click="tagClickCount += 1" @close="tagCloseCount += 1">Closable</el-tag>
          <span class="event-count">click {{ tagClickCount }} · close {{ tagCloseCount }}</span>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Select · interaction states</h2>
      <p class="section-note">The four cards are fixed visual specimens. Compatibility cases below use native interaction.</p>
      <div class="state-grid select-grid">
        <div class="demo-state select-demo">
          <span class="state-label">Default</span>
          <el-select v-model="selectDefault" aria-label="Default select" placeholder="Select a value">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="demo-state select-demo demo-force-hover">
          <span class="state-label">Hover</span>
          <el-select v-model="selectHover" aria-label="Hover select specimen" placeholder="Select a value">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="demo-state select-demo demo-force-focus">
          <span class="state-label">Focus</span>
          <el-select v-model="selectFocus" aria-label="Focus select specimen" placeholder="Select a value">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="demo-state select-demo">
          <span class="state-label">Disabled</span>
          <el-select disabled aria-label="Disabled select" placeholder="Select a value" />
        </div>
      </div>
      <div class="compatibility-block">
        <h3>Sizes and responsive width</h3>
        <div class="select-compat-grid">
          <el-select v-model="selectSmall" size="small" aria-label="Small select" placeholder="Small">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <el-select v-model="selectDefaultSize" aria-label="Default size select" placeholder="Default">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <el-select v-model="selectLarge" size="large" aria-label="Large select" placeholder="Large">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <el-select v-model="selectFixed" style="width: 280px" aria-label="Fixed width select" placeholder="Fixed 280px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="percent-select-host">
          <el-select v-model="selectPercent" style="width: 100%" aria-label="Full width select" placeholder="Width 100%">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>TreeSelect · hierarchical selection</h2>
      <div class="state-grid select-grid">
        <div class="demo-state select-demo">
          <span class="state-label">Default</span>
          <el-tree-select
            v-model="treeSelectDefault"
            :data="treeSelectData"
            aria-label="Default tree select"
            placeholder="Select a category"
          />
        </div>
        <div class="demo-state select-demo">
          <span class="state-label">Selected</span>
          <el-tree-select
            v-model="treeSelectSelected"
            :data="treeSelectData"
            aria-label="Selected tree select"
          />
        </div>
        <div class="demo-state select-demo">
          <span class="state-label">Multiple</span>
          <el-tree-select
            v-model="treeSelectMultiple"
            :data="treeSelectData"
            multiple
            show-checkbox
            aria-label="Multiple tree select"
            placeholder="Select categories"
          />
        </div>
        <div class="demo-state select-demo">
          <span class="state-label">Disabled</span>
          <el-tree-select
            v-model="treeSelectDisabled"
            :data="treeSelectData"
            disabled
            aria-label="Disabled tree select"
            placeholder="Disabled"
          />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Tree · hierarchical control</h2>
      <div class="tree-demo">
        <el-tree
          :data="treeSelectData"
          node-key="value"
          show-checkbox
          default-expand-all
          check-on-click-node
          :default-checked-keys="['tokens', 'web']"
          aria-label="Tree control"
        />
      </div>
    </section>

    <section class="demo-section">
      <h2>Tree · board panel</h2>
      <p class="section-note">A searchable hierarchy panel composed from the native Tree and existing Dark Red tokens and decoration assets.</p>
      <aside class="board-panel" aria-label="Board hierarchy panel">
        <header class="board-panel__header">
          <strong>标题文本</strong>
          <span class="board-panel__collapse" aria-label="Collapse panel"></span>
        </header>
        <div class="board-panel__tools">
          <el-input v-model="boardSearch" placeholder="搜索名称" clearable>
            <template #prefix><el-icon><Search /></el-icon></template>
          </el-input>
          <span class="board-panel__filter" aria-label="Filter"></span>
        </div>
        <el-tree
          ref="boardTreeRef"
          class="board-panel__tree"
          :data="boardTreeData"
          node-key="id"
          :default-expanded-keys="['group-a', 'group-b']"
          :current-node-key="'company'"
          :expand-on-click-node="false"
          :filter-node-method="filterBoardNode"
          highlight-current
        >
          <template #default="{ data }">
            <span class="board-panel__node">
              <span class="board-panel__node-main">
                <el-checkbox
                  v-if="data.kind !== 'plain'"
                  class="board-panel__checkbox"
                  :model-value="Boolean(data.active)"
                  :aria-label="`${data.label} selected`"
                  @click.stop
                />
                <span class="board-panel__label">{{ data.label }}</span>
              </span>
              <span class="board-panel__count" :class="{ 'is-total': data.total }">{{ data.count }}</span>
            </span>
          </template>
        </el-tree>
      </aside>
    </section>

    <section class="demo-section">
      <h2>Detail panel · information card</h2>
      <p class="section-note">Framed information card: caption above the frame, status tags, body copy, an option group and a bottom action bar.</p>
      <div class="detail-panel">
        <span class="detail-panel__caption">详情面板</span>
        <header class="detail-panel__header">
          <strong class="detail-panel__title">大标题的文本内容</strong>
          <el-icon class="detail-panel__close" aria-label="Close panel"><Close /></el-icon>
        </header>
        <div class="detail-panel__tags">
          <el-tag type="danger">标签</el-tag>
          <el-tag type="success">标签</el-tag>
        </div>
        <p class="detail-panel__text">文本：文本内容</p>
        <p class="detail-panel__paragraph">段落文本：这里是一行段落文本这里是一行段落文本这里是一行段落文本这里是一行段落文本这里是一行段落文本…</p>
        <div class="detail-panel__options">
          <span>标题：</span>
          <div class="detail-panel__options-list">
            <el-checkbox v-model="detailOptionA">选项</el-checkbox>
            <el-checkbox v-model="detailOptionB">选项</el-checkbox>
            <el-checkbox v-model="detailOptionC">选项</el-checkbox>
            <el-checkbox v-model="detailOptionD">选项</el-checkbox>
          </div>
        </div>
        <footer class="detail-panel__actions">
          <el-button class="detail-panel__action"><el-icon><Connection /></el-icon></el-button>
          <el-button class="detail-panel__action is-active"><el-icon><Share /></el-icon></el-button>
          <el-button class="detail-panel__action"><el-icon><Coordinate /></el-icon></el-button>
          <el-button class="detail-panel__action"><el-icon><Link /></el-icon></el-button>
          <el-button class="detail-panel__action"><el-icon><Medal /></el-icon></el-button>
          <el-button class="detail-panel__action"><el-icon><View /></el-icon></el-button>
          <el-button type="primary" class="detail-panel__action--primary">详情</el-button>
        </footer>
      </div>
    </section>

    <section class="demo-section">
      <h2>TimeSelect · time selection</h2>
      <div class="state-grid select-grid">
        <div class="demo-state select-demo">
          <span class="state-label">Default</span>
          <el-time-select
            v-model="timeSelectDefault"
            start="08:00"
            end="18:00"
            step="00:30"
            aria-label="Default time select"
            placeholder="Select a time"
          />
        </div>
        <div class="demo-state select-demo">
          <span class="state-label">Selected</span>
          <el-time-select
            v-model="timeSelectPreset"
            start="08:00"
            end="18:00"
            step="00:30"
            aria-label="Selected time"
          />
        </div>
        <div class="demo-state select-demo">
          <span class="state-label">Disabled</span>
          <el-time-select
            v-model="timeSelectDisabled"
            start="08:00"
            end="18:00"
            step="00:30"
            disabled
            aria-label="Disabled time select"
          />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Transfer · dual-list selection</h2>
      <div class="transfer-demo">
        <el-transfer
          v-model="transferValue"
          :data="transferData"
          :titles="['Available', 'Selected']"
          aria-label="Transfer items"
        />
      </div>
    </section>

    <section class="demo-section">
      <h2>Pagination · page navigation</h2>
      <div class="compatibility-block">
        <h3>Total, page size and jumper</h3>
        <div class="pagination-demo">
          <el-pagination
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :page-sizes="[10, 20, 50]"
            :total="238"
            size="small"
            layout="total, sizes, prev, pager, next, jumper"
          />
        </div>
      </div>
      <div class="compatibility-block">
        <h3>Compact</h3>
        <div class="pagination-demo">
          <el-pagination :default-current-page="2" :page-size="10" :total="50" layout="prev, pager, next" />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Table · data overview</h2>
      <div class="table-demo">
        <el-table :data="tableData" row-key="id" stripe style="min-width: 720px; width: 100%">
          <el-table-column prop="id" label="ID" width="120" />
          <el-table-column prop="name" label="Name" min-width="180" sortable />
          <el-table-column prop="owner" label="Owner" min-width="160" />
          <el-table-column prop="status" label="Status" width="130" />
          <el-table-column prop="updated" label="Updated" min-width="170" />
        </el-table>
      </div>
    </section>

    <section class="demo-section">
      <h2>Menu · navigation</h2>
      <div class="compatibility-block">
        <h3>Horizontal</h3>
        <div class="menu-demo menu-demo--horizontal">
          <el-menu mode="horizontal" default-active="components" :ellipsis="false">
            <el-menu-item index="dashboard">Dashboard</el-menu-item>
            <el-menu-item index="components">Components</el-menu-item>
            <el-sub-menu index="resources">
              <template #title>Resources</template>
              <el-menu-item index="docs">Documentation</el-menu-item>
              <el-menu-item index="guides">Guides</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
      </div>
      <div class="compatibility-block">
        <h3>Vertical</h3>
        <div class="menu-demo menu-demo--vertical">
          <el-menu default-active="overview">
            <el-menu-item index="overview">Overview</el-menu-item>
            <el-sub-menu index="library">
              <template #title>Component library</template>
              <el-menu-item index="inputs">Inputs</el-menu-item>
              <el-menu-item index="navigation">Navigation</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="settings">Settings</el-menu-item>
          </el-menu>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Menu · sidebar groups</h2>
      <div class="menu-demo menu-demo--sidebar-groups">
        <el-menu default-active="navigator-one-item-one" :default-openeds="['navigator-one']">
          <el-sub-menu index="navigator-one">
            <template #title>
              <el-icon><Location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="navigator-one-item-one">item one</el-menu-item>
              <el-menu-item index="navigator-one-item-two">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template #title><span>Group Two</span></template>
              <el-menu-item index="navigator-one-item-three">item three</el-menu-item>
              <el-menu-item index="navigator-one-item-four">item four</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="navigator-two">
            <el-icon><Menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="navigator-three">
            <el-icon><Document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="navigator-four">
            <el-icon><Setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </div>
    </section>

    <section class="demo-section">
      <h2>Dialog · business configuration</h2>
      <p class="section-note">Native Element Plus Dialog composed with the existing Menu, Tabs and Button styles.</p>
      <el-button type="primary" @click="businessDialogVisible = true">Open business configuration</el-button>
    </section>

    <el-dialog
      v-model="businessDialogVisible"
      class="business-config-dialog"
      width="min(1280px, calc(100vw - 128px))"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <template #header>
        <div class="business-config-dialog__title">业务配置</div>
      </template>

      <div class="business-config-dialog__layout">
        <aside class="business-config-dialog__sidebar">
          <el-menu
            :default-active="businessMenuActive"
            :default-openeds="['business-group-one', 'business-group-two']"
            @select="businessMenuActive = $event"
          >
            <el-sub-menu index="business-group-one">
              <template #title>
                <el-icon><Location /></el-icon>
                <span>一级菜单</span>
              </template>
              <el-menu-item index="business-secondary-1">二级菜单</el-menu-item>
              <el-menu-item index="business-secondary-2">二级菜单</el-menu-item>
              <el-menu-item index="business-selected">菜单选中</el-menu-item>
              <el-menu-item index="business-secondary-3">二级菜单</el-menu-item>
              <el-menu-item index="business-secondary-4">二级菜单</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="business-group-two">
              <template #title>
                <el-icon><Menu /></el-icon>
                <span>一级菜单</span>
              </template>
              <el-menu-item index="business-secondary-5">二级菜单</el-menu-item>
              <el-menu-item index="business-secondary-6">二级菜单</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="business-secondary-7">
              <el-icon><Document /></el-icon>
              <span>二级菜单</span>
            </el-menu-item>
            <el-menu-item index="business-secondary-8">
              <el-icon><Setting /></el-icon>
              <span>二级菜单</span>
            </el-menu-item>
          </el-menu>
        </aside>

        <div class="business-config-dialog__content">
          <el-tabs v-model="businessTabActive">
            <el-tab-pane label="菜单一" name="business-tab-one">
              <div class="business-config-dialog__empty"></div>
            </el-tab-pane>
            <el-tab-pane label="菜单一" name="business-tab-two">
              <div class="business-config-dialog__empty"></div>
            </el-tab-pane>
            <el-tab-pane label="菜单一" name="business-tab-three">
              <div class="business-config-dialog__empty"></div>
            </el-tab-pane>
            <el-tab-pane label="菜单一" name="business-tab-four">
              <div class="business-config-dialog__empty"></div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>

      <template #footer>
        <div class="business-config-dialog__footer">
          <div class="business-config-dialog__footer-group">
            <el-button>预览</el-button>
            <el-button>恢复默认</el-button>
          </div>
          <div class="business-config-dialog__footer-group">
            <el-button @click="businessDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="businessDialogVisible = false">保存</el-button>
          </div>
        </div>
      </template>
    </el-dialog>

    <section class="demo-section">
      <h2>Popover · contextual panel</h2>
      <p class="section-note">Native Element Plus popover. The Dark Red theme adds the company frame, corner brackets and primary glow; the light and dark themes keep the stock look.</p>
      <div class="demo-row">
        <el-popover placement="top" title="Panel title" :width="240" trigger="hover">
          <template #reference>
            <el-button>Hover · top</el-button>
          </template>
          <p>Plain surface with the company corner brackets and a primary glow.</p>
        </el-popover>
        <el-popover placement="bottom" :width="220" trigger="click">
          <template #reference>
            <el-button>Click · bottom</el-button>
          </template>
          <p>Untitled popover keeps the large padding token.</p>
        </el-popover>
        <el-popover placement="left" :width="200" trigger="hover">
          <template #reference>
            <el-button>Hover · left</el-button>
          </template>
          <p>Arrow fill follows the panel surface.</p>
        </el-popover>
        <el-popover placement="right" :width="200" trigger="hover">
          <template #reference>
            <el-button>Hover · right</el-button>
          </template>
          <p>Same frame on every placement.</p>
        </el-popover>
        <el-popover placement="top" :width="220" effect="dark" trigger="hover">
          <template #reference>
            <el-button>effect="dark"</el-button>
          </template>
          <p>Dark effect deepens the surface, frame stays the same.</p>
        </el-popover>
        <el-popover placement="top" :width="220" trigger="focus">
          <template #reference>
            <el-button>Focus</el-button>
          </template>
          <p>Focus-triggered popover.</p>
        </el-popover>
      </div>
    </section>

    <section class="demo-section">
      <h2>Statistic · key metrics</h2>
      <div class="statistic-demo">
        <el-statistic title="Active users" :value="2680" />
        <el-statistic title="Conversion rate" :value="12.68" :precision="2" suffix="%" />
        <el-statistic title="Response time" :value="34" suffix="ms" />
        <el-statistic title="Revenue" :value="12450" prefix="$" />
      </div>
    </section>

    <section class="demo-section">
      <h2>Message · native service</h2>
      <div class="demo-row">
        <el-button type="success" @click="showSuccess">Success</el-button>
        <el-button type="warning" @click="showDanger">Danger</el-button>
        <el-button type="danger" @click="showError">Error</el-button>
        <el-button type="danger" @click="showImportant">Important</el-button>
      </div>
      <div class="compatibility-block">
        <h3>Native configuration and handlers</h3>
        <div class="demo-row">
          <el-button @click="showGroupingMessage">String + grouping</el-button>
          <el-button @click="showVNodeMessage">VNode message</el-button>
          <el-button @click="showFunctionMessage">Function + showClose</el-button>
          <el-button @click="showExplicitIconMessage">Explicit icon</el-button>
          <el-button @click="closeLastMessage">Handler.close()</el-button>
          <el-button @click="ElMessage.closeAll()">closeAll()</el-button>
          <span class="event-count">onClose {{ messageCloseCount }}</span>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import { Close, Connection, Coordinate, Document, InfoFilled, Link, Location, Medal, Menu, Search, Setting, Share, View } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { MessageHandler } from 'element-plus'
import { h, reactive, ref, watch } from 'vue'

type Theme = 'light' | 'dark' | 'dark-red'
const themeClasses: Theme[] = ['light', 'dark', 'dark-red']

const theme = ref<Theme>('light')

watch(theme, (nextTheme) => {
  const root = document.documentElement
  root.classList.remove(...themeClasses)
  root.classList.add(nextTheme)
}, { immediate: true })

const checkboxDefault = ref(false)
const checkboxHover = ref(false)
const checkboxFocus = ref(false)
const checkboxChecked = ref(true)
const checkboxIndeterminate = ref(false)
const switchOff = ref(false)
const switchOn = ref(true)
const switchDisabled = ref(true)
const radioDefault = ref('')
const radioHover = ref('')
const radioFocus = ref('')
const radioChecked = ref('first')
const radioGroupValue = ref('alpha')
const formModel = reactive({ permissions: ['read'] })
const detailOptionA = ref(false)
const detailOptionB = ref(false)
const detailOptionC = ref(false)
const detailOptionD = ref(true)
const tagClickCount = ref(0)
const tagCloseCount = ref(0)
const selectDefault = ref('')
const selectHover = ref('')
const selectFocus = ref('')
const selectSmall = ref('')
const selectDefaultSize = ref('')
const selectLarge = ref('')
const selectFixed = ref('')
const selectPercent = ref('')
const treeSelectDefault = ref('')
const treeSelectSelected = ref('tokens')
const treeSelectMultiple = ref(['tokens', 'web'])
const treeSelectDisabled = ref('')
const treeSelectData = [
  {
    value: 'design',
    label: 'Design',
    children: [
      { value: 'tokens', label: 'Tokens' },
      { value: 'components', label: 'Components' },
    ],
  },
  {
    value: 'engineering',
    label: 'Engineering',
    children: [
      { value: 'web', label: 'Web' },
      { value: 'services', label: 'Services' },
    ],
  },
]
const boardSearch = ref('')
const boardTreeRef = ref()
const boardTreeData = [
  {
    id: 'group-a', label: '文本字段', count: '2,569', active: true, total: true, children: [
      {
        id: 'group-b', label: '文本字段', count: '236', active: true, children: [
          { id: 'field-1', label: '文本字段', count: '236' },
          { id: 'field-2', label: '文本字段', count: '236' },
          { id: 'field-3', label: '文本', count: '236' },
          { id: 'company', label: 'HAW-COM通信公司', count: '236', active: true },
          { id: 'field-4', label: '文本', count: '236' },
          { id: 'field-5', label: '文本', count: '236' },
          { id: 'field-6', label: '文本', count: '236' },
          { id: 'field-7', label: '文本', count: '236' },
          { id: 'field-8', label: '文本', count: '236' },
          { id: 'field-9', label: '文本字段', count: '236' },
          { id: 'field-10', label: '文本字段', count: '236' },
          { id: 'field-11', label: '文本字段', count: '236' },
          { id: 'field-12', label: '文本字段', count: '236' },
          { id: 'field-13', label: '文本字段', count: '236' },
          { id: 'field-14', label: '文本', count: '236' },
          { id: 'field-15', label: '文本', count: '236' },
          { id: 'field-16', label: '文本', count: '236' },
        ],
      },
      { id: 'field-17', label: '文本字段', count: '236' },
    ],
  },
  { id: 'field-18', label: '文本字段', count: '236', kind: 'plain' },
]
const filterBoardNode = (value: string, data: { label: string }) => !value || data.label.includes(value)

watch(boardSearch, value => boardTreeRef.value?.filter(value))
const timeSelectDefault = ref('')
const timeSelectPreset = ref('09:30')
const timeSelectDisabled = ref('14:00')
const transferValue = ref([2, 5])
const transferData = Array.from({ length: 8 }, (_, index) => ({
  key: index + 1,
  label: `Item ${index + 1}`,
}))
const paginationCurrentPage = ref(3)
const paginationPageSize = ref(10)
const tableData = [
  { id: 'DS-1042', name: 'Color tokens', owner: 'Design Systems', status: 'Active', updated: '2026-10-04 09:24' },
  { id: 'DS-1041', name: 'Button patterns', owner: 'Components', status: 'Review', updated: '2026-10-03 16:40' },
  { id: 'DS-1038', name: 'Form controls', owner: 'Components', status: 'Active', updated: '2026-10-02 11:15' },
  { id: 'DS-1032', name: 'Icon library', owner: 'Design Systems', status: 'Archived', updated: '2026-09-28 14:08' },
]
const selectMultiple = ref<string[]>([])
const selectRemote = ref('')
const remoteLoading = ref(false)
const remoteOptions = ref<{ label: string; value: string }[]>([])
const messageCloseCount = ref(0)
const activeTab = ref('tab-1')
const compatibilityTab = ref('overview')
const businessDialogVisible = ref(false)
const businessMenuActive = ref('business-selected')
const businessTabActive = ref('business-tab-one')
let lastMessage: MessageHandler | undefined
const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
]

const showSuccess = () => ElMessage.success('保存成功，请再接再厉！')
const showDanger = () => ElMessage.warning('提示请注意，可能有危险哦！')
const showError = () => ElMessage.error('错误操作，请重新输入！')
const showImportant = () => ElMessage({
  type: 'error',
  message: '重要提示，请谨慎对待！！！',
})

const remoteMethod = (query: string) => {
  remoteLoading.value = true
  window.setTimeout(() => {
    remoteOptions.value = query
      ? options.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
      : options
    remoteLoading.value = false
  }, 120)
}

const messageClosed = () => {
  messageCloseCount.value += 1
}

const showVNodeMessage = () => {
  lastMessage = ElMessage({
    type: 'success',
    message: h('strong', 'VNode message'),
    duration: 0,
    showClose: true,
    onClose: messageClosed,
  })
}

const showGroupingMessage = () => {
  lastMessage = ElMessage({
    type: 'success',
    message: 'String message · click twice to group',
    duration: 0,
    showClose: true,
    grouping: true,
    onClose: messageClosed,
  })
}

const showFunctionMessage = () => {
  lastMessage = ElMessage({
    type: 'error',
    message: () => h('span', 'Function message · duration 0'),
    duration: 0,
    showClose: true,
    onClose: messageClosed,
  })
}

const showExplicitIconMessage = () => {
  lastMessage = ElMessage({
    type: 'error',
    message: 'Explicit icon and customClass preserved',
    icon: InfoFilled,
    customClass: 'verification-explicit-icon',
    duration: 0,
    showClose: true,
    onClose: messageClosed,
  })
}

const closeLastMessage = () => lastMessage?.close()
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  min-width: 360px;
  min-height: 100%;
  margin: 0;
}

body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--el-bg-color);
}

.page {
  min-height: 100vh;
  padding: 40px;
  color: var(--el-text-color-primary);
  background:
    radial-gradient(circle at 80% 0%, color-mix(in srgb, var(--el-color-primary) 12%, transparent), transparent 34%),
    var(--el-bg-color);
  transition: color 0.2s, background-color 0.2s;
}

.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  max-width: 1180px;
  margin: 0 auto 32px;
}

.page-header h1 {
  margin: 4px 0 8px;
  font-size: clamp(28px, 4vw, 44px);
}

.page-header p {
  margin: 0;
  color: var(--el-text-color-secondary);
}

.page-header .eyebrow {
  color: var(--el-color-primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.demo-section {
  max-width: 1180px;
  margin: 0 auto 20px;
  padding: 24px;
  border: 1px solid var(--el-border-color-light);
  border-radius: 12px;
  background: color-mix(in srgb, var(--el-bg-color-overlay) 86%, transparent);
}

.demo-section h2 {
  margin: 0 0 20px;
  font-size: 18px;
}

.demo-section h3 {
  margin: 0 0 12px;
  font-size: 14px;
}

.section-note {
  margin: -10px 0 18px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}

.button-state-matrix {
  display: grid;
  grid-template-columns: 82px repeat(2, minmax(180px, 1fr));
  width: min(100%, 680px);
  gap: 14px 20px;
  align-items: center;
}

.button-state-matrix__head,
.button-state-matrix__row {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  align-items: center;
  gap: inherit;
}

.button-state-matrix__head,
.button-state-matrix__label {
  color: var(--el-text-color-secondary);
  font-size: 12px;
  font-weight: 600;
}

.button-state-matrix .el-button {
  min-width: 82px;
  justify-self: start;
}

.button-size-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 18px;
}

.business-tags {
  margin-top: 20px;
}

.state-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.demo-state {
  display: flex;
  min-height: 86px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  background: color-mix(in srgb, var(--el-fill-color-light) 42%, transparent);
}

.state-label {
  color: var(--el-text-color-secondary);
  font-size: 12px;
  font-weight: 600;
}

.select-demo .el-select {
  width: 100%;
  max-width: 320px;
}

.compatibility-block {
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.compatibility-block .el-form-item {
  margin-bottom: 0;
}

.select-compat-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
}

.select-compat-grid + h3,
.percent-select-host + h3 {
  margin-top: 18px;
}

.percent-select-host {
  width: min(100%, 560px);
  margin-top: 14px;
}

.event-count {
  color: var(--el-text-color-secondary);
  font-size: 12px;
}

.tabs-reference-host {
  width: min(100%, 420px);
}

.tabs-compat-host {
  width: min(100%, 640px);
}

.tabs-reference-host .el-tab-pane,
.tabs-compat-host .el-tab-pane {
  min-height: 48px;
  color: var(--el-text-color-regular);
  font-size: var(--el-font-size-base);
}

.demo-force-hover .el-checkbox .el-checkbox__inner,
.demo-force-focus .el-checkbox .el-checkbox__inner {
  border-color: var(--el-color-primary);
}

html.dark-red .demo-force-hover .el-checkbox .el-checkbox__inner,
html.dark-red .demo-force-focus .el-checkbox .el-checkbox__inner {
  border-color: var(--color-primary-light-3);
}

.demo-force-hover .el-select .el-select__wrapper:not(.is-disabled) {
  box-shadow: 0 0 0 1px var(--el-color-primary-light-3) inset;
}

.demo-force-focus .el-select .el-select__wrapper:not(.is-disabled) {
  box-shadow: 0 0 0 1px var(--el-color-primary) inset;
}

html.dark-red .demo-force-hover .el-select .el-select__wrapper:not(.is-disabled) {
  box-shadow:
    inset 0 0 0 2px var(--color-primary-light-3),
    0 0 10px color-mix(in srgb, var(--color-primary-light-3) 16%, transparent);
}

html.dark-red .demo-force-focus .el-select .el-select__wrapper:not(.is-disabled) {
  box-shadow:
    inset 0 0 0 2px var(--color-primary-light-3),
    0 0 12px color-mix(in srgb, var(--color-primary-light-3) 22%, transparent);
}

@media (max-width: 900px) {
  .page { padding: 24px; }
  .page-header { flex-direction: column; }
  .state-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 560px) {
  .page { padding: 16px; }
  .state-grid { grid-template-columns: 1fr; }
  .select-compat-grid .el-select { width: 100%; }
  .button-state-matrix {
    grid-template-columns: 68px repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
}
</style>
