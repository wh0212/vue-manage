<template>
  <div class="hander">
    <div @click="icon_un" class="hander_icon">
      <i v-if="active" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">wh后台管理系统</div>
    <div class="hander_right">
      <!-- 全屏显示 -->
      <div class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
      <!-- 消息 -->
      <div class="btn-bell">
        <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
          <i class="el-icon-bell"></i>
        </el-tooltip>
        <span class="btn-bell-badge" v-if="message"></span>
      </div>
      <!-- 头像 -->
      <div class="user-avator">
        <img src="../../assets/img/img.jpg" />
      </div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{username}}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <a href="https://github.com/wh0212/vue-manage" target="_blank">
            <el-dropdown-item>项目仓库</el-dropdown-item>
          </a>
          <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
// 导入全屏第三方模块
import screenfull from "screenfull";
export default {
  data() {
    return {
      active: false,
      fullscreen: false,
      message: 2,
      name: "wanghao"
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    },
    icon_un() {
      this.active = !this.active;
      this.$store.commit("activeIcon", this.active);
    },
    handleFullScreen() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: "您的浏览器无法进入全屏模式",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
      this.fullscreen = !this.fullscreen;

      // let element = document.documentElement;
      // if (this.fullscreen) {
      //   if (document.exitFullscreen) {
      //     document.exitFullscreen();
      //   } else if (document.webkitCancelFullScreen) {
      //     document.webkitCancelFullScreen();
      //   } else if (document.mozCancelFullScreen) {
      //     document.mozCancelFullScreen();
      //   } else if (document.msExitFullscreen) {
      //     document.msExitFullscreen();
      //   }
      // } else {
      //   if (element.requestFullscreen) {
      //     element.requestFullscreen();
      //   } else if (element.webkitRequestFullScreen) {
      //     element.webkitRequestFullScreen();
      //   } else if (element.mozRequestFullScreen) {
      //     element.mozRequestFullScreen();
      //   } else if (element.msRequestFullscreen) {
      //     // IE11
      //     element.msRequestFullscreen();
      //   }
      // }
      // this.fullscreen = !this.fullscreen;
    },
    checkFull() {
      var isFull =
        document.mozFullScreen ||
        document.fullScreen ||
        //谷歌浏览器及Webkit内核浏览器
        document.webkitIsFullScreen ||
        document.webkitRequestFullScreen ||
        document.mozRequestFullScreen ||
        document.msFullscreenEnabled;
      if (isFull === undefined) isFull = false;
      //console.log("isFull："+isFull)
      return isFull;
    }
  },
  mounted() {
    window.onresize = () => {
      // 全屏下监控是否按键了ESC
      if (!this.checkFull()) {
        // 全屏下按键esc后要执行的动作
        this.fullscreen = false;
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
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