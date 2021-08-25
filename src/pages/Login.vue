<template>
  <div></div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    signIn() {
      if (this.id === "" || this.password === "") return;

      this.$store.dispatch("SIGN_UP", {
        userid: this.id,
        password: this.password,
      });
    },
  },
})
export default class Landing extends Vue {
  data() {
    return {
      id: "",
      password: "",
    };
  }
}
</script>
<style lang=""></style>
