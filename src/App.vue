<template>
  <div id="app" :style="{ background }">
    <div :class="{ shake }">
      <p class="shakes">SHAKES</p>
      <p class="count">{{count}}</p>
    </div>
  </div>
</template>

<script>
import Shake from 'shake.js';
import randomColor from 'randomcolor';

const myShakeEvent = new Shake({
  threshold: 15, // optional shake strength threshold
  timeout: 1000, // optional, determines the frequency of event generation
});

export default {
  name: 'app',
  created() {
    myShakeEvent.start();
    window.addEventListener('shake', this.shakeEventDidOccur, false);
  },
  beforeDestroy() {
    window.removeEventListener('shake', this.shakeEventDidOccur, false);
    myShakeEvent.stop();
  },
  data() {
    return {
      count: 0,
      shake: false,
      background: randomColor(),
    };
  },
  methods: {
    shakeEventDidOccur() {
      this.count += 1;
      this.background = randomColor();
      this.shake = true;
      setTimeout(() => { this.shake = false; }, 1000);
    },
  },
};
</script>

<style>
@keyframes shake {
  from, to {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(0, -5vh, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(0, 5vh, 0);
  }
}

.shake {
  animation: shake 1s ease;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  line-height: 0;
  font-size: 20vw;
}

.shakes {
  font-size: 1em;
  font-weight: bold;
}

.count {
  font-size: 3em;
  font-weight: bold;
}
</style>
