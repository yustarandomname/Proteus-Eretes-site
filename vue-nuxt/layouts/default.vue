<template>
  <div>
    <Nuxt-link to="/" class="logo"> </Nuxt-link>

    <nav>NAVIGATION</nav>

    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('user/init', this.$supabase)

    this.$supabase.auth.onAuthStateChange((_, session) => {
      this.$store.commit('user/set', session.user)
    })
  },
}
</script>

<style>
.logo {
  position: fixed;
  top: 1em;
  left: 1em;
  height: 2.5em;
  width: 17em;
  background: url(~/assets/proteuslogo.png);
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
@media screen and (max-width: 600px) {
  .logo {
    background: url(~/assets/proteuslogo-mobile.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
