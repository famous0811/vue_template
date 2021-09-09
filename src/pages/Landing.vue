<template>
  <div class="home">
    <ModalComponent />
  </div>
</template>

<script>
import { Vue, Options } from "vue-class-component";
import ModalComponent from "@/components/assets/modal.vue";
@Options({
  components: { ModalComponent },
})
export default class Landing extends Vue {}
</script>

<style lang="scss"></style>
