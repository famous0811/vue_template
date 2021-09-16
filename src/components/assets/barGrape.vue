<template>
  <div class="bargrape">
    <div v-for="(data, idx) in test" :key="idx" class="bargrape_item">
      <span class="bargrape_item_row">
        <div :style="{ color: data.color }">{{ data.row }}</div>
      </span>
      <div class="bargrape_item_barbase">
        <span
          class="bargrape_item_bar"
          :style="{ width: data.value + '%', background: data.color }"
        >
          <div class="bargrape_item_value">{{ data.value }}%</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";
interface datasprops {
  row: string;
  value: number;
  color: string;
}
class Props {
  test = prop<datasprops[]>({
    default: [
      { row: "test", value: 25, color: "#191919" },
      { row: "test1", value: 10, color: "#191919" },
      { row: "test2", value: 90, color: "#191919" },
      { row: "test3", value: 60, color: "#191919" },
      { row: "test3", value: 60, color: "#191919" },
      { row: "test3", value: 60, color: "#191919" },
      { row: "test3", value: 60, color: "#191919" },
    ],
  });
}
@Options({})
export default class BarGrape extends Vue.with(Props) {
  created() {
    console.log(this.test);
  }
}
</script>

<style scoped lang="scss">
.bargrape {
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 400px;
  overflow: scroll;
}
.bargrape_item {
  display: flex;
  margin: 10px 0;
  width: 100%;
  &_row {
    font-size: 18px;
    font-weight: 500;
    /* margin: 0 20px; */
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  &_barbase {
    position: relative;
    background-color: #fff;
    width: 100%;
    /* max-height: 24px; */
    border-radius: 3px;
    z-index: 1;
  }
  &_bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    /* max-height: 24px; */
    border-radius: 3px;
    animation: charAnimation 1.3s;
    @keyframes charAnimation {
      0% {
        width: 0px;
      }
    }
  }
  &_value {
    position: absolute;
    right: -50px;
  }
}
</style>
