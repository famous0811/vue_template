<template lang="">
  <button
    :style="{
      color: color,
      border: border,
      background: backGround,
      fontSize: fontSize,
      cursor: 'pointer',
    }"
    v-text="text"
    :class="{ typesign: typesign }"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "buttonasset",
  props: {
    color: {
      type: String,
      default: "red",
    },
    text: {
      type: String,
      required: true,
      default: "button",
    },
    border: {
      type: String,
      default: "none",
    },
    backGround: {
      type: String,
      default: "none",
    },
    fontSize: {
      type: String,
      default: "17px",
    },
  },
})
export default class Button extends Vue {}
</script>

<style lang="scss"></style>
