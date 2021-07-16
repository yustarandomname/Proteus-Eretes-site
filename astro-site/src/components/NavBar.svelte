<script lang="ts">
  import Popup from "../components/Popup.svelte"
  import Input from "../components/Input.svelte"

  const user = false

  let zoekenVisible = false
  let userDropdown = true
  let loginVisible = false

  let email, password;

  // TODO
  function signIn(email, password) {return {error: null}}

  // TODO
  function resetPassword() {return {error: null}}

</script>

<style>
    nav {
    position:fixed;
    right: 1em;
    top: 1em;
    border: 1px solid var(--light);
    border-radius: 0.75em;
    padding: 0.25em;
    display: flex;
    font-size: 1em;
    z-index: 100;
    background:white
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
      background: url(./assets/proteuslogo-mobile.png);
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
</style>

<nav>
  {#if user}
    <div class="primary-color" on:click={() => {zoekenVisible = true; userDropdown = false}}>zoeken</div>
    <a href="./leden-panel">leden panel</a>

    <!-- <div class="avatar">
      <AsyncImage 
        promise={getProfile(user.id)} 
        dummySrc="./assets/dummyfoto.jpg" 
        alt="user profile" 
        --height="2em"
        --width="2em"
        on:click={() => userDropdown = !userDropdown} 
      /> -->

      <!-- DROPDOWN -->
      <!-- <Dropdown bind:visible={userDropdown} /> -->

      <!-- ZOEKEN -->
      <!-- <Zoeken bind:visible={zoekenVisible} /> -->
    <!-- </div> -->
  {:else}
    <a href="./lid-worden" class="bold secondary-color">Lid worden</a>
    <div class="primary-color" on:click={() => {loginVisible = true}}>Log in</div>
  {/if}
</nav>

<!-- LOGIN POPUP -->
<Popup bind:visible={loginVisible}>
  <h1>Login</h1>

  <form on:submit|preventDefault={async () => {
    const {error} = await signIn(email, password)
    if (!error) loginVisible = false
    }}>
    <Input type="email" bind:value={email}/>
    <Input type="password" bind:value={password}/>
    <Input type="submit" value="Login" />
    <div class="link light-color" on:click={resetPassword}>wachtwoord vergeten</div>
  </form>
</Popup>