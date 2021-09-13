<template>
  <div class="modalWrap" @click.self="closeModal">
    <div class="modal" :style="{ width: width, height: height }">
      <div class="modalBody" :style="rowColumn && 'flex-direction: column'">
        <div v-if="closeBtnShow" class="modalClose" @click="closeModal">
          <i class="iconify" data-icon="mdi:close" />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  props: {
    width: {
      type: String,
      default: "500px",
    },
    height: {
      type: String,
      default: "300px",
    },
    closeBtnShow: {
      type: Boolean,
      default: true,
    },
    rowColumn: {
      type: Boolean,
      default: false,
    },
  },
})
/*v-if로 출력하고 @close에 
v-if에 들어가는 변수를 false로 만들어서 사용*/
export default class Modal extends Vue {
  closeModal() {
    this.$emit("close");
  }
}
</script>

<style lang="scss">
.modalWrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f5f5f5;
  border-radius: 5px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
}
.modalBody {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.modalClose {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  & > .iconify {
    font-size: 20px;
  }
}
</style>
