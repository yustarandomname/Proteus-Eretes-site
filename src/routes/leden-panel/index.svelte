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
    overflow: hidden;
    border-radius: 0.5em;
  }

  .info {
    margin-left: 1em;
  }

  .larger-text {font-size:1.2em}
  .small-text {font-size: 0.8em;}
</style>

{#if $user}
  <Container header="Profiel" link={{href: "/leden-panel/wijzig", title: "Wijzig"}}>
    <div class="profileGrid">
      <div class="profile">
        <AsyncImage 
          promise={getProfile($user.id)} 
          dummySrc="./assets/dummyfoto.jpg"
          alt="profile" 
          --height="13.75em" --width="13.75em" />   
      </div>

      <div class="info">
        <div class="primary-color bold larger-text">Persoonlijk</div>
        {#await getUser($user.id)}
          <div class="light-color">laden...</div>
        {:then userData}
          {#if userData}
            <div>{userData.name} {userData.surname}</div>
            {#if $user.user_metadata.jaarlaag}
              <a href="./jaarlagen?jaar={$user.user_metadata.jaarlaag}">{$user.user_metadata.jaarlaag}</a>
            {/if}
            <br>
            <div>{userData.street} {userData.street_number}</div>
            <div>{userData.street_zip} {userData.city}</div>
            <br>
            <div>{userData.bank_abbriviated}</div>
            <div class="light-color small-text">Niet zichtbaar voor andere leden</div>
            <br>
            <a href="tel:{userData.phone}">+31 {userData.phone}</a>
            <a href="mailto:{$user.email}">{$user.email}</a>
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