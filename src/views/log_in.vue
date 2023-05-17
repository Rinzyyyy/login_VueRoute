<script setup>
import { ref, computed, watchEffect, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import data from '../assets/data.json'
import '../assets/main.css'

const route = useRoute()
//語言切換
let lang = ref('en')
watch(
  () => route.query.lang,
  (newlang) => {
    lang = newlang
    enter = data[lang].account
    pass_word = data[lang].password
    forget = data[lang].forgot
    log_in = data[lang].login
    or = data[lang].or
    signupP = data[lang].have
    signupA = data[lang].signUp
    sucess = data[lang].alert
    err = data[lang].error
  }
)

let enter = data[lang.value].account
let pass_word = data[lang.value].password
let forget = data[lang.value].forgot
let log_in = data[lang.value].login
let or = data[lang.value].or
let signupP = data[lang.value].have
let signupA = data[lang.value].signUp
let sucess = data[lang.value].alert
let err = data[lang.value].error

//登入設定
const isSafari =
  navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1
const account = ref(null)
const password = ref(null)
const wrongHint = ref('hide')
const text = ref('password')
const eyeOpen = ref('hide')
const eyeLash = ref('eye')
let open = false
if (isSafari) {
  eyeLash.value = 'eye2'
}

function accese() {
  let getAccount = localStorage.getItem(`account_${account.value}`)
  let getPassword = localStorage.getItem(`password_${account.value}`)
  if (account.value === getAccount && password.value === getPassword && account.value !== null) {
    wrongHint.value = 'hide'
    alert(sucess)
  } else {
    wrongHint.value = 'show'
    account.value = ''
  }
}
function passwordEye() {
  open = !open
  if (open) {
    eyeOpen.value = 'eye'
    eyeLash.value = 'hide'
    text.value = 'text'
    if (isSafari) {
      eyeOpen.value = 'eye2'
    }
  } else if (!open) {
    eyeOpen.value = 'hide'
    eyeLash.value = 'eye'
    text.value = 'password'
    if (isSafari) {
      eyeLash.value = 'eye2'
    }
  }
}

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
</script>

<template>
  <div class="back">
    <form>
      <section>
        <input v-model="account" type="text" :placeholder="enter" />
        <input v-model="password" :type="text" :placeholder="pass_word" />
        <font-awesome-icon :icon="['fas', 'eye']" :class="eyeOpen" @click="passwordEye" />
        <font-awesome-icon :icon="['fas', 'eye-slash']" :class="eyeLash" @click="passwordEye" />
        <p :class="wrongHint">{{ err }}</p>
        <RouterLink to="/forgot" :class="a">{{ forget }}</RouterLink>
      </section>
      <button @click="accese" :class="button">{{ log_in }}</button>
      <div class="or">
        <hr />
        <p :class="p">{{ or }}</p>
        <hr />
      </div>
      <div class="singnUp">
        <p :class="p">{{ signupP }}</p>
        <RouterLink to="/signUp" :class="a">{{ signupA }}</RouterLink>
      </div>
    </form>
  </div>
</template>
<style scope>
.eye {
  position: relative;
  color: gray;
  left: 9rem;
  bottom: 1.9rem;
  cursor: pointer;
}
.eye2 {
  position: relative;
  color: gray;
  left: 6.5rem;
  bottom: 1.9rem;
  cursor: pointer;
}
@media (max-width: 340px) {
  .eye {
    left: 6rem;
  }
}
</style>
