<script lang="ts">
  import {SUPABASE_URL, SUPABASE_KEY} from "$lib/logic/secrets"
  import supabase from "$lib/logic/supabaseStore"
  import user from "$lib/logic/userStore"
  import { signIn } from "$lib/logic/DBuser"
  import { getProfile } from "$lib/logic/DBphotos"

  import AsyncImage from "$lib/components/AsyncImage.svelte"
  import Input from "$lib/components/forms/Input.svelte"
  import Popup from "$lib/components/Popup.svelte"
  import Dropdown from "$lib/widgets/Dropdown.svelte"
  import Zoeken from "$lib/widgets/Zoeken.svelte"

  async function resetPassword() {
    const {data, error} = await $supabase.auth.api.resetPasswordForEmail(email, {redirectTo: "localhost:3000/reset-password"})

    //TODO: send feedback to user
  }

  supabase.init(SUPABASE_URL, SUPABASE_KEY);
  user.set($supabase.auth.user())

  $supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user)
  })

  let loginVisible: boolean = false;
  let userDropdown: boolean = false;
  let zoekenVisible: boolean = false;
  
  let email: string, password: string;
</script>

<style>
  .logo {
    position: fixed;
    top: 1em;
    left: 1em;
    height: 2.5em;
    width: 17em;
    background: url(./assets/proteuslogo.png);
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 100;
  }

  .wrapper {
    padding-top:4.5em
  }

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

<a href="/" class="logo"> </a>

<nav>
  {#if $user}
    <div class="primary-color" on:click={() => {zoekenVisible = true; userDropdown = false}}>zoeken</div>
    <a href="./leden-panel">leden panel</a>

    <div class="avatar">
      <AsyncImage 
        promise={getProfile($user.id)} 
        dummySrc="./assets/dummyfoto.jpg" 
        alt="user profile" 
        --height="2em"
        --width="2em"
        on:click={() => userDropdown = !userDropdown} 
      />

      <!-- DROPDOWN -->
      <Dropdown bind:visible={userDropdown} />

      <!-- ZOEKEN -->
      <Zoeken bind:visible={zoekenVisible} />
    </div>
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

<div class="wrapper">
  <slot></slot>
</div>

