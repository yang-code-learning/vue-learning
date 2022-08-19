import { ref, watch } from 'vue'

// 有存值和取值操作

export default function(key, value) {
  const data = ref(value);

  if (value) {
    // 存新
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    // 取
    JSON.parse(window.localStorage.getItem(key));
  }
  // 改旧
  watch(data, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
  })

  return data;
}