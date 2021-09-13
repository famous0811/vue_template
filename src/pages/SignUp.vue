<template lang="">
  <div></div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
@Options({
  methods: {},
})
export default class Sigin extends Vue {
  id = "";
  password = "";
  store = useStore();
  signUp() {
    if (this.id === "" || this.password === "") return;
    this.store.dispatch("SIGN_UP", {
      userid: this.id,
      password: this.password,
    });
  }
}
</script>

<style lang=""></style>
