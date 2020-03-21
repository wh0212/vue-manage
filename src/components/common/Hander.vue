<template>
  <div class="hander">
    <div @click="icon_un" class="hander_icon">
      <i v-if="active" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">wh后台管理系统</div>
    <div class="hander_right">
      <div class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      fullscreen: false
    };
  },
  methods: {
    icon_un() {
      this.active = !this.active;
      this.$store.commit("activeIcon", this.active);
    },
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  }
};
</script>


<style lang="scss" scoped>
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.hander_right {
  float: right;
  width: 200px;
  margin-right: 50px;
  color: #fff;
  display: flex;
  height: 70px;
  align-items: center;
}
.hander_icon {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
  i {
    // font-size: 26px;
    color: #fff;
  }
}
.logo {
  float: left;
  font-size: 25px;
  color: #fff;
  line-height: 70px;
}
.hander {
  width: 100%;
  height: 70px;
  background: #242f42;
  font-size: 22px;
}
</style>