<script setup>
import { ref, computed, watch, defineEmits } from 'vue'
import data from '../assets/data.json'

//語言切換
const lang = ref('en')

const emit = defineEmits(['res', 'mode'])
emit('res', 'en')
watch(lang, (newlang) => {})

//
const mode = ref('left')
const modeChcked = ref(false)
const moon = ref('hide')
const sun = ref('showSun')
const button = ref(null)
function modeSwitch() {
  modeChcked.value = !modeChcked.value
  emit('mode', modeChcked.value)

  if (!modeChcked.value) {
    mode.value = 'left'
    sun.value = 'showSun'
    moon.value = 'hide'
    button.value = ''
  } else {
    mode.value = 'right'
    sun.value = 'hide'
    moon.value = 'showMoon'
    button.value = 'blackmode_button'
  }
  console.log(modeChcked.value)
}

//set clock
const clock = ref(Date.now())

setInterval(() => {
  clock.value = Date.now()
}, 1000)

const now = computed(() => {
  return new Date(clock.value).toLocaleString('en-US', { hour12: false }).replace(',', '_')
})
</script>

<template>
  <main>
    <nav>
      <button
        :class="button"
        type="button"
        role="switch"
        :aria-checked="modeChcked"
        class="switch"
        @click="modeSwitch"
      >
        <span :class="sun"><font-awesome-icon :icon="['fass', 'sun']" /></span>
        <span :class="mode">Ｏ</span>
        <span :class="moon"><font-awesome-icon :icon="['fass', 'moon']" size="xs" /></span>
      </button>

      <span><font-awesome-icon :icon="['fass', 'globe']" /></span>
      <select :class="button" v-model="lang">
        <option value="en">US</option>
        <option value="cn">中文</option>
      </select>
      <span class="arrow"><font-awesome-icon :icon="['fas', 'angle-down']" /></span>
    </nav>
    <header>
      <img class="logo" src="../assets/logo.svg" alt="logo" />
      <p class="time">{{ now }}</p>
    </header>
  </main>
</template>
<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
img {
  padding-bottom: 1rem;
}
.logo {
  height: 9vh;
}

select,
button {
  -appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  transition: all 0.5s ease-in-out;
}

.back {
  display: block;
  height: 100vh;
}

button {
  margin: 0.3rem;
  width: 20rem;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: 0.05rem solid rgb(158, 157, 157);
  background-color: rgba(235, 240, 243, 0.8);
}
button {
  margin: 0.6rem;
  width: 5rem;
  background-color: rgb(241, 237, 237);
  color: rgb(113, 115, 116);
}
nav {
  display: flex;
  padding: 0.9rem 0 0 1rem;
  align-items: center;
}
.switch {
  margin: 0 1rem 0 0;
  width: 2.8rem;
  height: 1.3rem;
  padding: 0.01rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right {
  padding-right: 0.4rem;
  font-size: 1.1rem;
}
.left {
  padding-left: 0.2rem;
  font-size: 1.1rem;
}
.hide {
  display: none;
}
.showSun {
  display: block;
  margin-left: 0.5rem;
  font-size: 0.9rem;
}
.showMoon {
  display: block;
  margin-right: 0.5rem;
}
select {
  margin-left: 0.5rem;
  width: 3.3rem;
  height: 1.2rem;
  padding: 0rem 0.5rem;
  font-size: 0.8rem;
  background-color: rgb(241, 237, 237);
  border: none;
  border-radius: 0.5rem;
}
.arrow {
  position: absolute;
  top: 1.1rem;
  left: 8.5rem;
  color: rgb(168, 167, 165);
  pointer-events: none;
}
.blackmode_back {
  background-color: rgb(36, 35, 35);
  color: aliceblue;
}
.blackmode_p {
  color: aliceblue;
}
.blackmode_a {
  color: rgb(82, 232, 182);
}
.blackmode_button {
  background-color: rgb(62, 62, 62);
  color: aliceblue;
}
</style>
