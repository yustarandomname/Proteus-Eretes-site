<template>
  <router-link :to="{ name: 'Home' }" class="logo"></router-link>

  <nav v-if="user.isAuthenticated.value">
    <div class="primary-color" @click="openZoeken">zoeken</div>
    <a href="leden-panel">leden panel</a>

    <div class="avatar">
      <AsyncImage
        promise="{user.image.get()}"
        dummySrc="/assets/dummyfoto.jpg"
        alt="user profile"
        style="--height='2em', --width='2em'"
        @click="openProfile"
      />
    </div>
  </nav>
  <nav v-else>
    <a href="lid-worden" class="bold secondary-color">Lid worden</a>
    <div class="primary-color" @click="showLogin">Log in</div>
  </nav>

  <!-- LOGIN POPUP -->
  <Popup :visible="loginVisible" @close="closeLogin">
    <h1>Login</h1>

    <form @submit.prevent="handleLogin">
      <input type="email" autocomplete="email" v-model="email" />
      <input type="password" autocomplete="current-password" v-model="password" />
      <input type="submit" value="Login" />

      Email: {{ email }}
      <div class="link light-color" @click="resetPassword">wachtwoord vergeten</div>
    </form>
  </Popup>

  <router-view class="wrapper" />
</template>

<style>
:root {
  --base: white;
  --primary: #0058a9;
  --primary-accent: #0278e6; /* Used for instance with clicked navigation links*/
  --secondary: #f57f38;
  --light: #797979;

  --red: #f00;
  --red-light: rgb(250, 165, 165);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* DEFAULT STYLES */
body {
  margin: 0;
  overflow-x: hidden;
}

a {
  color: var(--primary);
  text-decoration: none;
  display: block;
}
a:visited {
  color: var(--primary-accent);
}

.inline {
  display: inline-block;
}

.link {
  color: var(--primary);
  cursor: pointer;
}

/* COLORS */
.primary-color {
  color: var(--primary);
}
.secondary-color {
  color: var(--secondary);
}
.light-color {
  color: var(--light);
}

.primary-background {
  background: var(--primary);
}
.secondary-background {
  background: var(--secondary);
}
.red-background {
  background: var(--red);
}
.red-light-background {
  background: var(--red-light);
}

/* FONT */
.bold {
  font-weight: bold;
}
</style>

<style scoped>
.logo {
  position: fixed;
  top: 1em;
  left: 1em;
  height: 2.5em;
  width: 17em;
  background: url(assets/proteuslogo.png);
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 100;
}

.wrapper {
  padding-top: 4.5em;
}

nav {
  position: fixed;
  right: 1em;
  top: 1em;
  border: 1px solid var(--light);
  border-radius: 0.75em;
  padding: 0.25em;
  display: flex;
  font-size: 1em;
  z-index: 100;
  background: white;
}

nav > * {
  cursor: pointer;
  margin: 0.5em;
  user-select: none;
}

/* AVATAR */
.avatar {
  width: 2em;
  height: 2em;
  overflow: hidden;
  border-radius: 50%;
  margin: 0em !important;
}

/* INPUT */
input {
  width: 100%;
  width: var(--width, -webkit-fill-available);
  border-radius: 0.5em;
  border: 1px solid var(--light);
  padding: var(--padding, 1em);
  margin-top: 1em;
  font-size: 1em;
  background: white;
}

input[type="submit"] {
  background: var(--primary);
  color: white;
  cursor: pointer;
  border: 1px solid var(--primary);
}

input[type="submit"]:hover {
  background: var(--secondary);
}

@media screen and (max-width: 600px) {
  .logo {
    background: url(/assets/proteuslogo-mobile.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>

<script>
import AsyncImage from "@/components/AsyncImage.vue";
import Popup from "@/components/Popup.vue";
import { provide, ref } from "vue";
import user from "./utility/user";

export default {
  components: {
    AsyncImage,
    Popup,
  },
  setup() {
    const loginVisible = ref(false);
    const email = ref("");
    const password = ref("");

    const showLogin = () => {
      loginVisible.value = true;
    };
    const closeLogin = () => {
      console.log("event");
      loginVisible.value = false;
    };

    const handleLogin = async () => {
      const { error } = await user.auth.login(email.value, password.value);

      if (error) alert(error.message);
      else loginVisible.value = false;
      console.log(email.value, password.value);
    };

    provide("user", user);

    return { user, loginVisible, handleLogin, email, password, showLogin, closeLogin };
  },
};
</script>
