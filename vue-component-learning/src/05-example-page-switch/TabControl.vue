<template>
  <div class="tab-control">
    <div class="tab-control-item"
         :class="{'active': index === currentIndex}"
         @click="handleClick(index)"
         v-for="(item, index) in titles" 
         :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    emits: ['titleClick'],
    props: {
      titles: {
        type: Array,
        dafault() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick', index);
      },
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
    user-select: none;
  }
  .tab-control-item.active {
    color: blueviolet;
  }
  .tab-control-item.active span {
    border-bottom: 5px solid blueviolet;
    padding: 5px 10px;
  }
</style>