<template>
    <div class="home">
      <div class="animation"></div>
      <button @click="handleClick">btn</button>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  
  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {
    private a = 1;
    mounted() {
      this.raf();
    }
  
    private raf() {
      requestAnimationFrame(() => {
        this.raf();
      });
    }
  
    private handleClick() {
      for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
          console.log(Math.sqrt(819278329));
        }
      }
    }
  }
  </script>
  <style lang="less" scoped>
  // 会卡住
  @keyframes position-move {
    0% {
      left: 0px;
    }
  
    50% {
      left: 50px;
    }
  
    100% {
      left: 0px;
    }
  }
  // 不会卡住
  @keyframes gpu-move {
    0% {
      transform: translateX(0px);
    }
  
    50% {
      transform: translateX(50px);
    }
  
    100% {
      transform: translateX(0px);
    }
  }
  .home {
    height: 400px;
  }
  .animation {
    position: absolute;
    width: 100px;
    height: 100px;
    background: blue;
  
    animation: 1s ease-in-out 0s infinite position-move;
  }
  </style>
  