<template>

  <div>
      <Chat v-if="user"/>
      <ChatLogin v-else/>
  </div>
  
</template>

<script>

import Chat from '@/components/Chat.vue'
import ChatLogin from '@/components/ChatLogin.vue'
import firebase from 'firebase'

export default {

    data() {
        return {
            user: firebase.auth().currentUser
        }
    },

  components: {
      Chat,
      ChatLogin
  }
}
</script>