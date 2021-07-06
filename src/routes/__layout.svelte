<script lang="ts">
  import Popup from "$lib/components/Popup.svelte"
  import Input from "$lib/components/forms/Input.svelte"
  import {sveltesupa, Auth} from "sveltesupa"
  import {SUPABASE_URL, SUPABASE_KEY} from "$lib/logic/secrets"

  sveltesupa.init({url: SUPABASE_URL, key: SUPABASE_KEY});

  let loginVisible: boolean = false;
  let userDropdown: boolean = false
  let email: string, password: string;

  let user;
</script>

<style>
  .logo {
    position: fixed;
    top: 1em;
    left: 1em;
    height: 2.5em;
    width: 17em;
    background: url(./assets/proteuslogo.svg);
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 100;
  }

  .wrapper {
    margin-top:4.5em
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
</style>

<a href="/" class="logo"> </a>

<nav>
  <!-- <Auth {sveltesupa} let:user let:signIn let:signOut> -->
    {#if user}
      <div class="primary-color">zoeken</div>
      <a href="./leden-panel">leden panel</a>
      <img src="{user.profile}" alt="user profile" on:click={() => userDropdown = !userDropdown} />
    {:else}
      <a href="./lid-worden" class="bold secondary-color">Lid worden</a>
      <div class="primary-color" on:click={() => {loginVisible = true}}>Log in</div>
    {/if}

    <!-- LOGIN POPUP -->
    <Popup bind:visible={loginVisible}>
      <h1>Login</h1>

      <form on:submit|preventDefault={() => console.log("login")}>
        <Input type="email" bind:value={email}/>
        <Input type="password" bind:value={password}/>
        <Input type="submit" value="Login" />
        <div class="link light-color" on:click={() => console.log("forgot password")}>wachtwoord vergeten</div>
      </form>
    </Popup>
  <!-- </Auth> -->
</nav>

<div class="wrapper">
  <slot></slot>
</div>