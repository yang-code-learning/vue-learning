<template>
  <div>
    <h2>{{counter}}</h2>
    <h2>{{doubleCounter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <h3>{{data}}</h3>
    <button @click="changeData">此人是谁</button>
    <p class="content"></p>
    <div class="scroll">
      <div class="scroll-x">scrollX: {{scrollX}}</div>
      <div class="scroll-y">scrollY: {{scrollY}}</div>
    </div>
    <div class="mouse">
      <div class="mouse-x">mouseX: {{mouseX}}</div>
      <div class="mouse-y">mouseY: {{mouseY}}</div>
    </div>
    
  </div>
</template>

<script>
  // 可以不写index.js
  import {
    useCounter, 
    useLocalStorage, 
    useMousePosition, 
    useScrollPosition, 
    useTitle} from './hooks'

  export default {
    setup()  {
      // 案例1：计数器
      const {counter, doubleCounter, increment, decrement} = useCounter();

      // 案例2：修改标题
      const titleRef = useTitle("shabi");
      setTimeout(() => {
        titleRef.value = "qihongyu"
      }, 3000)
      
      // 案例3：滑动位置
      const {scrollX, scrollY} = useScrollPosition();

      // 案例4：鼠标移动
      const {mouseX, mouseY} = useMousePosition();

      // 案例5：本地缓存
      const data = useLocalStorage("shabiInfo", {name: "骑蕻隅", age: 23});
      const changeData = () => data.value = "臭傻逼";

      return {
        counter,
        doubleCounter,
        increment,
        decrement,
        // 等效于下面，上面const就不用写了
        // ...useCounter

        scrollX,
        scrollY,

        mouseX,
        mouseY,
        
        data,
        changeData,
      }    
    }
  }
</script>

<style scoped>
  .content {
    width: 3000px;
    height: 5000px
  }
  .scroll {
    position: fixed;
    right: 30px;
    bottom: 20px
  }
  .mouse {
    position: fixed;
    right: 30px;
    top: 20px
  }
</style>