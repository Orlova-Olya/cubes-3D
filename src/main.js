import { createApp } from 'vue'
import App from './App.vue'

import './styles/common.css'
import './styles/variables.css'

import Cube from './components/Cube/index.vue'
import CubesContainer from './components/CubesContainer/index.vue'

const app = createApp(App)
app.component('CubesContainer', CubesContainer)
app.component('Cube', Cube)
app.mount('#app')
