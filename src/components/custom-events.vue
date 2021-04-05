<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  >
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
  <input
    type="text"
    :value="modelValue"
    @input="emitValue($event.target.value)"
  >
  <input
    type="text"
    :value="description"
    @input="emitDes($event.target.value)"
  >
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    modelValue: String,
    firstName: String,
    lastName: String,
    modelModifiers: { // 给无参v-model自定义modifier
      default: () => ({
        upperCase: false,
      }),
    },
    description: String,
    descriptionModifiers: { // 给参数为description的v-model:description自定义modifier
      default: () => ({
        capitalize: false,
      }),
    },
  },
  emits: [
    'update:firstName',
    'update:lastName',
    'update:modelValue',
    'update:description',
  ],
  setup(props) {
    console.log(props.modelModifiers);
  },
  methods: {
    emitValue(value: string) {
      let v: string = value;
      if (this.modelModifiers.upperCase) {
        v = String.prototype.toUpperCase.call(v);
      }
      this.$emit('update:modelValue', v);
    },
    emitDes(value: string) {
      let v: string = value;
      if (this.descriptionModifiers.capitalize) {
        v = v.charAt(0).toUpperCase() + v.slice(1);
      }
      this.$emit('update:description', v);
    },
  },
});
</script>