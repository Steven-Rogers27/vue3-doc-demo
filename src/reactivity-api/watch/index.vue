<template>
  <div>watch count: {{ count }}</div>
  <div>watch age: {{ age }}</div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'watch-demo',
  setup() {
    const count = ref(0);
    // 和watchEffect不同，
    // 1. watch()在注册时不会立即执行，而是当get函数的返回值或者ref对象的value发生变化时才会执行回调。
    // 2. 和watchEffect不同， 回调中无需直接引用ref对象的value，ref.value发生变化是也会引起回调的重新执行，下面两种情况都会触发重新执行
    watch(count, () => console.log(count));
    watch(count, () => console.log(count.value));
    // 回调中接收到的currentValue 和 prevValue 已经是unref过的value值，而非ref对象
    watch(count, (v, oldV) => console.log(v));
    setTimeout(() => {
      // 当依赖的count.value值发生变化时，会再次执行回调，此处就是打印 1
      count.value++;
    }, 3000);

    const age = ref(12);
    setTimeout(() => {
      age.value++;
    }, 4000);
    // 3. watch可以同时监听多个数据源的变化
    watch([count, age], ([c, a], [prevC, prevA]) => {
      console.log('watch multi source ', c, a);
    });

    return {
      count,
      age,
    };
  },
});
</script>