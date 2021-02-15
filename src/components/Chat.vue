<template>
<div class="chat-bg">

<div class="wrapper container py-5">

  

  <section>
      <header>
        <h1 class="mb-0 py-2">Premier League Hub Chat</h1>
    </header>
      <main class="py-4 px-2">
          <div v-for="(msg, index) in messages" v-bind:key="'index-'+index" :class="['message', sentOrReceived(msg.userUID)]">
              <img title="User" :src="msg.photoURL" :alt="msg.displayName">
              <p>{{msg.text}}</p>
          </div>

          <div ref="scrollable"></div>
      </main>
      <form v-on:submit.prevent="sendMessage">
          <input title="Enter your chat message" v-model="message" type="text" placeholder="Enter your message...">
          <button :disabled="!message" type="submit">Send<i class="fas fa-comment pl-2"></i></button>
      </form>
  </section>

  </div>

 </div>
</template>

<script>
import firebase from 'firebase/app'
import "@firebase/auth"
import "@firebase/firestore"

export default {
    mounted() {
        this.db.collection('messages').orderBy('createdAt')
        .onSnapshot(querySnap => {
            this.messages = querySnap.docs.map(doc => doc.data())
        })
    },
    data() {
        return {
            user: firebase.auth().currentUser,
            db: firebase.firestore(),
            message: '',
            messages: [],
        }
    },
    methods: {
        sentOrReceived(userUID) {
            return userUID === this.user.uid ? 'sent' : 'received '
        },
        async sendMessage() {

            const messageInfo = {
                'userUID': this.user.uid,
                'displayName': this.user.displayName,
                'photoURL': this.user.photoURL,
                'text': this.message,
                'createdAt': Date.now(),
            }

           await this.db.collection('messages').add(messageInfo)

           this.message = ''
           this.$refs['scrollable'].scrollIntoView({behavior: "smooth", block: "end"})
        }
    }
}
</script>

<style scoped>

.chat-bg {
    background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/home-bg.jpg");
    background-size: cover;
    background-color: var(--main-purple-theme);
    border-top: 4px solid var(--red-theme);
}

.wrapper {
    text-align: center;
    padding: 0;
}
.wrapper header {
    background-color: var(--red-theme);
    color: white;
    width: 100%;
    align-items: center;
}
.wrapper header h1 {
    font-weight: 600;
    border-bottom: 2px solid var(--light-blue-theme);
}
.wrapper section {
    background-color: var(--main-purple-theme);
}
.wrapper section main {
    max-height: 600px;
    overflow-y: scroll;
}
.wrapper section main::-webkit-scrollbar {
    width: 0.25rem;
}
.wrapper section main::-webkit-scrollbar-track {
    background: #1e1e24;
}
.wrapper section main::-webkit-scrollbar-thumb {
    background: #6649b8;
}
.wrapper section form {
    background-color: var(--main-purple-theme);
    display: flex;
    padding: 15px;
}
.wrapper section form button {
    width: 20%;
    background-color: #38388f;
    font-weight: 500;
    font-size: 1.5rem;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
.wrapper section form input {
    width: 100%;
    background: #3a3a3a;
    color: white;
    outline: none;
    border: none;
    font-size: 1.5rem;
    padding: 10px 15px 10px 15px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
.wrapper button {
    background-color: #282c34;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
}
.wrapper button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
.wrapper button, .wrapper input {
    color: #fff;
    border: none;
}
.wrapper p {
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: white;
    text-align: center;
}
.wrapper .message {
    display: flex;
}
.wrapper .message.received p {
    background: #e5e5ea;
    color: #000;
}
.wrapper .message.sent {
    flex-direction: row-reverse;
}
.wrapper .message.sent p {
    color: #fff;
    background: var(--blue-theme);
    align-self: flex-end;
    
}
.wrapper .message img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0 10px;
}
.wrapper .message p {
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: #fff;
    text-align: center;
}

</style>