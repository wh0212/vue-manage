<template>
  <div class="hander">
    <div @click="icon_un" class="hander_icon">
      <i v-if="active" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">wh后台管理系统</div>
    <div class="hander_right">
      <!-- 全屏显示  el-icon-rank    组件：el-tooltip  -->
      <div @click="handlefullscreen" class="btn-fullscreen">
        <el-tooltip effect="dark" :content="fullscreen?'取消全屏':'全屏'">
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
import screenfull from "screenfull";
export default {
  data() {
    return {
      active: false,
      message: 2,
      name: "wanghao",
      fullscreen: false
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
    handlefullscreen() {
      console.log(screenfull);
      if (!screenfull.isEnabled) {
        this.$message({
          message: "您的浏览器不支持全屏",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
      this.fullscreen = !this.fullscreen;
    },
    //监听esc
    checkfull() {
      let isFull =
        document.mozFullScreen ||
        document.fullscreen ||
        //谷歌浏览器，以及webkit内核的浏览器
        document.webkitIsFullScreen ||
        document.webkitRequestFullScreen ||
        document.mozRequestFullScreen ||
        document.msFullscreenEnabled;
      if (isFull === undefined) isFull = false;
      return isFull;
    }
  },
  mounted() {
    window.onresize = () => {
      //全屏下监控是否按下了esc
      if (!this.checkfull()) {
        //按下esc后要执行的操作
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