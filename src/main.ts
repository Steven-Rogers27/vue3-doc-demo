import { createApp } from 'vue'
import App from './App.vue'

export const app = createApp(App)
app.component('my-component', {
  props: {
    title: String
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    >
  `
})
app.mount('#app')
