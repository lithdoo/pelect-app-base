import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as pelect from './pelect.interface'



pelect.register.fileAction('test', () => true, () => {
    pelect.api.openTab('testTab', 'https://www.baidu.com')
})


pelect.register.tabAction('testTab', () => {
    const view = document.createElement('div')
    createApp(App).mount(view)
    return {
        tabId: Math.random().toString(),
        view, title: 'testTab',
    }
})