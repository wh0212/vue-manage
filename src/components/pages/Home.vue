<template>
  <div class="wrapper">
    <Hander />
    <div class="cont">
      <Sidebar />
      <div class="content-box" :class="{'content-collapse':$store.state.activeIcon}">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hander from "../common/Hander";
import Sidebar from "../common/Sidebar";
export default {
  data() {
    return {
      collapse: false
    };
  },
  components: {
    Hander,
    Sidebar
  }
};
</script>


<style scoped>

</style>