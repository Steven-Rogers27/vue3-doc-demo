<template>
  <div>watchEffect {{ count }}</div>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  name: 'watch-effect-demo',
  setup() {
    const count = ref(0);
    // 首次执行watchEffect(effect)时，就会立即执行一遍effect函数，此处就是打印 0
    // effect中只有引用了ref对象的value时，ref.value的变化才能引起effect的重新执行
    watchEffect(() => console.log(count.value)); // 当count.value变化时会重新执行
    watchEffect(() => console.log(count)); // 当count.value变化时不会重新执行
    setTimeout(() => {
      // 当effect中所依赖的count.value值发生变化时，会再次执行effect，此处就是打印 1
      count.value++;
    }, 3000);

    return {
      count
    };
  },
});
</script>