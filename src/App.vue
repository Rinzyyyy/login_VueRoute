<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref, watchEffect, computed, watch } from 'vue'
import './assets/main.css'

const router = useRouter()
let modeChecked = ref(false)
let lang = ref('en')

//語言切換

watchEffect(() => {
  router.push({ query: { modeChecked: modeChecked.value, lang: lang.value } })
  // console.log(lang.value, 'app')
})

//切換深淺顏色模式

watch(modeChecked, (NewmodeCheck) => {
  modeChecked.value = NewmodeCheck
  router.push({ query: { modeChecked: modeChecked.value, lang: lang.value } })
  //console.log(NewmodeCheck, 'app')
})
const mode = ref('left')
const moon = ref('hide')
const sun = ref('showSun')
const back = ref(null)
const button = ref(null)

function modeSwitch() {
  modeChecked.value = !modeChecked.value
  if (!modeChecked.value) {
    mode.value = 'left'
    sun.value = 'showSun'
    moon.value = 'hide'
    back.value = ''
    button.value = ''
  } else {
    mode.value = 'right'
    sun.value = 'hide'
    moon.value = 'showMoon'
    back.value = 'blackmode_back'
    button.value = 'blackmode_button'
  }
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
  <div class="back" :class="back">
    <nav>
      <button
        :class="button"
        type="button"
        role="switch"
        :aria-checked="modeChecked"
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
      <img class="logo" src="./assets/logo.svg" alt="logo" />
      <p class="time">{{ now }}</p>
    </header>
    <RouterView />
  </div>
</template>

<style></style>
