<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import data from '../assets/data.json'
import '../assets/main.css'

const route = useRoute()
const router = useRouter()

//語言切換
let lang = ref(route.query.lang || 'en')
watch(
  () => route.query.lang,
  (newlang) => {
    lang = newlang
    enter = data[lang].account
    resetPass_word = data[lang].resetPassword
    reset = data[lang].reset
    or = data[lang].or
    have = data[lang].have
    signUpLink = data[lang].signUp
    resetSucess = data[lang].resetSucessAlert
    resetfalse = data[lang].resetFalse
    resetfalse2 = data[lang].resetFalse2
  }
)

let enter = data[lang.value].account
let resetPass_word = data[lang.value].resetPassword
let reset = data[lang.value].reset
let or = data[lang.value].or
let have = data[lang.value].have
let signUpLink = data[lang.value].signUp
let resetSucess = data[lang.value].resetSucessAlert
let resetfalse = data[lang.value].resetFalse
let resetfalse2 = data[lang.value].resetFalse2

//切換深淺顏色模式
let modeChecked = ref(false)
const button = ref(null)
const a = ref(null)
const p = ref(null)

watch(
  () => route.query.modeChecked,
  (NewmodeChecked) => {
    modeChecked = NewmodeChecked
    // NewmodeChecked is srting not booling
    // console.log(modeChecked, 'in')
    if (modeChecked == 'false') {
      button.value = ''
      a.value = ''
      p.value = ''
    } else {
      button.value = 'blackmode_button'
      a.value = 'blackmode_a'
      p.value = 'blackmode_p'
    }
  }
)

//重設密碼
const account = ref(null)
const newPassword = ref(null)

function SignUpAlertContent() {
  let getAccount = localStorage.getItem(`account_${account.value}`)
  if (account.value !== null && account.value === getAccount) {
    if (newPassword.value !== null) {
      alert(resetSucess)
      localStorage.setItem(`password_${account.value}`, newPassword.value)
      router.push('/')
    } else {
      alert(resetfalse)
    }
  } else {
    alert(resetfalse2)
  }
}
</script>

<template>
  <main>
    <section class="reset">
      <input v-model="account" type="text" :placeholder="enter" />
      <input v-model="newPassword" type="text" :placeholder="resetPass_word" />
    </section>
    <button @click="SignUpAlertContent" :class="button">{{ reset }}</button>
    <div class="or">
      <hr />
      <p :class="p">{{ or }}</p>
      <hr />
    </div>
    <div class="singnUp">
      <p :class="p">{{ have }}</p>
      <RouterLink to="/signUp" :class="a">{{ signUpLink }}</RouterLink>
    </div>
  </main>
</template>

<style>
.reset {
  background-color: rgba(237, 220, 220, 0.4);
}
</style>
