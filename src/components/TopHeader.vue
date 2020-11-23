<template>
  <div>
    Logged In
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div>
      <button @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user

      // if(user){
      //   this.loggedIn = true
      // } else {
      //   this.loggedIn = false
      // }
    })
  },
  data() {
    return {
      loggedIn: false,
    }
  },
  methods: {
    signOut() {
      const data = firebase.auth().signOut()
      console.log(data)
      this.$router.replace({ name: 'Login' })
    },
  },
}
</script>

<style lang="scss" scoped></style>
