import { ref, watch } from 'vue';

export default function(title = 'default title') {
  // 方法1：
  // document.title = title;

  // 方法2：希望返回到App.vue以便随时修改
  // 注意，下面的变量并不能直接修改title，因此需要监听
  // 且由于是惰性的，启动时不会立即监听，
  // 从而默认标题还是一开始就传过来的值都没生效
  const titleRef = ref(title)
  watch(titleRef, (newValue) => {
    document.title = newValue
  }, {
    immediate: true
  })

  return titleRef
}