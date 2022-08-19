<template>
  <div>
    <h2>你好，小可爱</h2>
    <home></home>
    <async-category></async-category>

    <!-- suspense -->
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #loading>
        <div>loading...</div>
      </template>
    </suspense>
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue';

  import Home from './Home.vue';
  // import AsyncCategory from './AsyncCategory.vue';
  
  const AsyncCategory = defineAsyncComponent({
    // () => import('./AsyncCategory.vue')
    loader: () => import('./AsyncCategory.vue'),
    // 下面是加载组件，可以单独做一个Laoding.vue
    loading: () => <div>Loading...</div>,
    error: (error) => <div>Error: {error}</div>,
    // delay: 200,
    // onError: function(err, retry, attempts) {...}
  });

  export default {
    components: {
      Home,
      AsyncCategory
    }
  }
</script>

<style scoped>

</style>