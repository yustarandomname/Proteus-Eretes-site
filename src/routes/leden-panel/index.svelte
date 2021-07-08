<script>
  import user from "$lib/logic/userStore"
  import Error from "$lib/widgets/Error.svelte"
  import Container from "$lib/components/Container.svelte"
  import AsyncImage from "$lib/components/AsyncImage.svelte"

  import {getProfile} from "$lib/logic/DBphotos"
  import {getUser} from "$lib/logic/DBuser"
</script>

<style>
  .profileGrid{
    display: flex;
  }

  .profile {
    width: 15em;
    height: 15em;
    object-fit: contain;
    overflow: hidden;
    border-radius: 0.5em;
  }
</style>

{#if $user}
  <Container header="Profiel" link={{href: "/wijzig", title: "Wijzig"}}>
    <div class="profileGrid">
      <div class="profile">
        <AsyncImage 
          promise={getProfile($user.id)} 
          dummySrc="./assets/dummyfoto.jpg"
          alt="profile" 
          --height="15em" --width="15em" />   
      </div>

      <div class="info">
        <div class="primary">Persoonlijk</div>
        {#await getUser($user.id)}
          <div class="light-color">laden...</div>
        {:then userData}
          {#if userData}
            {userData}
          {/if}
        {/await}
      </div>
    </div>
    
  </Container>

{:else}
  <Error>
    Dit pannel is alleen voor ingelogde leden. Je bent niet ingelogd.
  </Error>
{/if}