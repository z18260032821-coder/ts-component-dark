<template>
  <main class="spec-page">
    <header class="spec-page__header">
      <div>
        <p class="spec-page__eyebrow">Element Plus 2.14.5</p>
        <h1>Dialog · Business Configuration</h1>
        <p class="spec-page__note">
          Standalone spec for the Dark Red dialog, composed with the existing Menu, Tabs and Button styles.
        </p>
      </div>
      <el-radio-group v-model="theme" aria-label="Theme">
        <el-radio-button value="light">Light</el-radio-button>
        <el-radio-button value="dark">Dark</el-radio-button>
        <el-radio-button value="dark-red">Dark Red</el-radio-button>
      </el-radio-group>
    </header>

    <section class="spec-section">
      <h2>Dialog · business configuration</h2>
      <p class="spec-section__note">
        Native Element Plus Dialog composed with the existing Menu, Tabs and Button styles.
      </p>
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
  </main>
</template>

<script setup lang="ts">
import { Document, Location, Menu, Setting } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'

type Theme = 'light' | 'dark' | 'dark-red'
const themeClasses: Theme[] = ['light', 'dark', 'dark-red']

// Defaults to dark-red: this page exists to show the company theme's dialog.
const theme = ref<Theme>('dark-red')

watch(theme, (nextTheme) => {
  const root = document.documentElement
  root.classList.remove(...themeClasses)
  root.classList.add(nextTheme)
}, { immediate: true })

const businessDialogVisible = ref(false)
const businessMenuActive = ref('business-selected')
const businessTabActive = ref('business-tab-one')
</script>

<style>
.spec-page {
  min-height: 100vh;
  padding: 32px;
  background: var(--el-bg-color-page);
}

.spec-page__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  max-width: 1180px;
  margin: 0 auto 24px;
}

.spec-page__header h1 {
  margin: 0 0 8px;
  color: var(--el-text-color-primary);
  font-size: 24px;
}

.spec-page__eyebrow {
  margin: 0 0 6px;
  color: var(--el-text-color-secondary);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.spec-page__note {
  margin: 0;
  color: var(--el-text-color-regular);
  font-size: 14px;
}

.spec-section {
  max-width: 1180px;
  margin: 0 auto 20px;
  padding: 24px;
  border: 1px solid var(--el-border-color-light);
  border-radius: 12px;
  background: color-mix(in srgb, var(--el-bg-color-overlay) 86%, transparent);
}

.spec-section h2 {
  margin: 0 0 20px;
  font-size: 18px;
}

.spec-section__note {
  margin: -10px 0 18px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}
</style>
