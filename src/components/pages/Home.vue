<template>
  <div class="wrapper">
    <Hander />
    <Sidebar />
    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <router-view></router-view>
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
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}

.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}

.content-collapse {
  left: 65px;
}
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content {
  width: 100%;
  height: 400;
  /* position: relative; */
  /* border:1px red solid; */
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>