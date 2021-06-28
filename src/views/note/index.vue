<template>
  <div class="x-node">
    <el-menu
      :default-active="activeItem"
      active-text-color="#409EFF"
      :class="[ 'x-card', 'x-menu', {'collapse': isCollapse }]"
      :collapse="isCollapse"
      router
    >
      <el-submenu :key="index" :index="'' + index" v-for="(item,index) of menuList">
        <template #title>
          <i class="el-icon-menu" />
          <span>{{ item[0].type }}</span>
        </template>
        <el-menu-item-group >
          <el-menu-item :key="index" v-for="(subItem,index) of item" :index="subItem.path">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <div class="x-main x-card">
      <router-view />
    </div>
    <Page404 v-if="pageNotFound"/>
  </div>
</template>

<script>
import Page404 from '../../components/error/404'
import { getRouteInfo, getMarkByPath } from '../../data/catalog'

export default {
  name: 'X-Note',
  props: ['note'],
  components: {
    Page404
  },
  data () {
    return {
      isCollapse: false,
      menuList: [],
      activeItem: null,
      pageNotFound: false
    }
  },
  created () {
    this.menuList = getRouteInfo(this.note)
    if (this.menuList.length > 0) {
      const mark = getMarkByPath(this.$route.path)
      if (!mark) {
        this.$router.replace('/' + this.note + '/' + this.menuList[0][0].path)
        this.activeItem = this.menuList[0][0].path
      } else {
        this.activeItem = mark.index
      }
    } else {
      this.pageNotFound = true
    }
  }
}

</script>

<style lang="scss" scoped>
  .x-node {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    background: $color-background-main;
    padding: 32px 0;
    .x-menu {
      height: calc(100vh - 119px);
      padding: 10px;
      width: 20%;
      margin-left: 32px;
    }
    .collapse{
      width: auto;
    }
    .x-main {
      height: calc(100vh - 119px);
      width: 100%;
      margin: 0 32px 0 16px;
      padding: 16px;
      background: $color-background-default;
    }
  }
</style>
