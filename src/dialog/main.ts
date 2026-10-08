import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import DialogSpec from './DialogSpec.vue'
import '../styles/index.css'

const app = createApp(DialogSpec)
app.use(ElementPlus)
app.mount('#app')
