<template>
  <div>
    <button v-for="(item, index) in tabs" :key="item"
            @click="tabSwitch(index)"
            :class="{active: currentTabIndex == index}">
      <span>{{item}}</span>
    </button>
  </div>
  
  <!-- 1. v-if实现 -->
  <!-- <template v-if="currentTabIndex == 0">
    <home></home>
  </template>
  <template v-else-if="currentTabIndex == 1">
    <about></about>
  </template>
  <template v-else-if="currentTabIndex == 2">
    <category></category>
  </template> -->

  <!-- 2. component实现 -->
  <!-- 注意下面的age有冒号是为了限制为数字 -->
  <keep-alive include="about">
    <component :is="tabs[currentTabIndex]"
               name="zly"
               :age="18"
               @homeClick="tabSwitch"></component>
  </keep-alive>
  
</template>

<script>
  import Home from './pages/Home.vue'
  import About from './pages/About.vue'
  import Category from './pages/Category.vue'

  export default {
    components: {
      Home,
      About,
      Category
    },
    data() {
      return {
        tabs: ["home", "about", "category"],
        currentTabIndex: 0
      }
    },
    methods: {
      tabSwitch(index) {
        this.currentTabIndex = index;
        console.log("内部页面发生点击");
      },
    }
  }
</script>

<style scoped>
  .active {
    color: red;
    background-color: aqua;
  }
</style>