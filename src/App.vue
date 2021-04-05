<template>
  <watch-effect-demo></watch-effect-demo>
  <watch-demo></watch-demo>
  <custom-events
    v-bind="{firstName: 'Jorge', lastName: 'Push'}"
    v-model.upperCase="myText"
    v-model:description.capitalize="description"
  ></custom-events>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import WatchEffectDemo from '@/reactivity-api/watchEffect/index.vue';
import WatchDemo from '@/reactivity-api/watch/index.vue';
import CustomEvents from '@/components/custom-events.vue';

@Options({
  components: {
    WatchEffectDemo,
    WatchDemo,
    CustomEvents,
  },
  data() {
    return {
      myText: 'Gosla versus KingKong',
      description: '',
    };
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
