<template>
  <div></div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
@Options({})
export default class Landing extends Vue {
  id = "";
  password = "";
  store = useStore();
  signIn() {
    if (this.id === "" || this.password === "") return;
    this.store.dispatch("SIGN_IN", {
      userid: this.id,
      password: this.password,
    });
  }
}
</script>
<style lang=""></style>
