<template>
  <div>
    <!-- 下案例msg并非调用子组件的，说明作用域问题 -->
    <!-- <child-cpn>
      <button>{{msg}}</button>
    </child-cpn> -->
    <show-names :names="names">
      <template v-slot:default="slotProps">
        <button>{{slotProps.index}}-{{slotProps.item}}</button>
      </template>
    </show-names>
  </div>
</template>

<script>
  import ChildCpn from './ChildCpn.vue'
  import ShowNames from './ShowNames.vue'

  export default {
    components: {
      ChildCpn,
      ShowNames
    },
    data() {
      return {
        names: ['a', 'b', 'c']
      }
    }
  }
</script>

<style scoped>

</style>