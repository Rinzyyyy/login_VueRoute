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
    pass_word = data[lang].password
    SignUp = data[lang].signUp
    or = data[lang].or
    logInP = data[lang].logInP
    logInLink = data[lang].login
    SignUpsucess = data[lang].SignUpAlert
    SignUpfale = data[lang].SignFale
    hasbeenSignUp = data[lang].hasbeenSignUp
    SignUpfalelength = data[lang].SignUpfalelength
    SignUpfaleChar = data[lang].SignUpfaleChar
  }
)

let enter = data[lang.value].account
let pass_word = data[lang.value].password
let SignUp = data[lang.value].signUp
let or = data[lang.value].or
let logInP = data[lang.value].logInP
let logInLink = data[lang.value].login
let SignUpsucess = data[lang.value].SignUpAlert
let SignUpfale = data[lang.value].SignFale
let hasbeenSignUp = data[lang.value].hasbeenSignUp
let SignUpfalelength = data[lang.value].SignUpfalelength
let SignUpfaleChar = data[lang.value].SignUpfaleChar

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

//註冊設定
const newAccount = ref(null)
const newPassword = ref(null)
const reg = new RegExp('^[A-Za-z0-9]+$')
const wrongHintlength = ref('hide')
const wrongHintchar = ref('hide')

function SignUpAlertContent() {
  let getAccount = localStorage.getItem(`account_${newAccount.value}`)
  if (
    newAccount.value !== null &&
    newPassword.value !== null &&
    newAccount.value !== getAccount &&
    newAccount.value.length >= 5 &&
    newPassword.value >= 5 &&
    reg.test(newPassword.value)
  ) {
    alert(SignUpsucess)
    localStorage.setItem(`account_${newAccount.value}`, newAccount.value)
    localStorage.setItem(`password_${newAccount.value}`, newPassword.value)
    router.push('/')
  } else if (newAccount.value === getAccount && newAccount.value !== null) {
    alert(hasbeenSignUp)
  } else if (newAccount.value === null || newAccount.value === null) {
    alert(SignUpfale)
  } else if (!reg.test(newPassword.value)) {
    wrongHintchar.value = 'show'
  } else if (
    (newAccount.value.length < 5 && newAccount.value !== null) ||
    (newPassword.value.length < 5 && newPassword.value !== null)
  ) {
    wrongHintlength.value = 'show'
  }
}
</script>

<template>
  <div class="back">
    <form>
      <section class="signUp">
        <input v-model="newAccount" type="text" :placeholder="enter" />
        <input v-model="newPassword" type="text" :placeholder="pass_word" />
        <p :class="wrongHintlength">{{ SignUpfalelength }}</p>
        <p :class="wrongHintchar">{{ SignUpfaleChar }}</p>
      </section>
      <button @click="SignUpAlertContent" :class="button">{{ SignUp }}</button>
      <div class="or">
        <hr />
        <p :class="p">{{ or }}</p>
        <hr />
      </div>
      <div class="singnUp">
        <p :class="p">{{ logInP }}</p>
        <RouterLink to="/" :class="a">{{ logInLink }}</RouterLink>
      </div>
    </form>
  </div>
</template>

<style>
.signUp {
  background-color: rgba(217, 231, 217, 0.4);
}
p {
  font-size: 0.85rem;
}
</style>
