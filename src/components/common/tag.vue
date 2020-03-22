<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li
        class="tags-li"
        v-for="(item,index) in taglist"
        :class="{'active': isActive(item.path)}"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
        <span class="tags-li-icon" @click="closeTags(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taglist: []
    };
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.taglist.splice(index, 1)[0];
      const item = this.taglist[index]
        ? this.taglist[index]
        : this.taglist[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push("/");
      }
    },
    rout() {
      console.log(1);
    },
    handleClose(tag) {
      this.taglist.splice(this.taglist.indexOf(tag), 1);
    },
    setTags(value) {
      const isExist = this.taglist.some(item => {
        return item.path === value.fullPath;
      });
      //   console.log(isExist);
      if (!isExist) {
        if (this.taglist.length >= 8) {
          this.taglist.shift();
        }
        this.taglist.push({
          title: value.meta.title,
          path: value.fullPath,
          name: value.name
        });
      }
      console.log(this.taglist);
    }
  },
  watch: {
    $route(newValue) {
      console.log(newValue);
      this.setTags(newValue);
    }
  },
  computed: {
    showTags() {
      return this.taglist.length > 0;
    }
  },
  created() {
    this.setTags(this.$route);
  }
};
</script>


<style  scoped>
.tag {
  width: 100%;
  height: 30px;
  background: #fff;
  line-height: 30px;
}
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: #fff;
  background: blue;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>