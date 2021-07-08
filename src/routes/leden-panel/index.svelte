<script>
  import AsyncImage from "$lib/components/AsyncImage.svelte"
  import Container from "$lib/components/Container.svelte"
  import Grid from "$lib/components/Grid.svelte"
  import GridItem from "$lib/components/GridItem.svelte"
  import Error from "$lib/widgets/Error.svelte"
  
  import user from "$lib/logic/userStore"
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

  <Grid header="Snelle links">
    <GridItem title="Afschrijven" icon="pencil-outline" link="./afschrijven" />
    <GridItem title="Leden lijst" icon="people-outline" link="./leden-lijst" />
    <GridItem title="Eet lijst" icon="pizza-outline" link="./eet-lijst" />
    <GridItem title="Schadeboek" icon="warning-outline" link="./schadeboek" />
    <GridItem title="Contact" icon="at-outline" link="./contact" />
    <GridItem title="Info" icon="information-outline" link="./info" />
    <GridItem title="Kleding verkoop" icon="shirt-outline" link="./kleding-verkoop" />
    <GridItem title="Lustrum" icon="balloon-outline" link="./lustrum" />
  </Grid>

  <Container header="Agenda" link={{title: "Zie meer", href:"agenda"}}>
    <h2>
      Agenda met vandaag, morgen, overmorgen en binnen kort
    </h2>

    Binnenkort zijn de 3 meest recente events na overmorgen. <br>
    Hier komen feesten, borrels, en afgeschreven boten te staan. <br>
    Alle events zijn snelle links naar de desbetreffende pagina. Feesten en borrels kun je voor inschrijven en booten uitschrijven
  </Container>

  <Grid header="Intern">
    <GridItem title="Blog schrijven" icon="pencil-outline" link="./intern/blog-schrijven" />
    <GridItem title="Kleding verkoop" icon="shirt-outline" link="./intern/kleding-verkoop" />
    <GridItem title="Hoe veilig varen?" icon="help-buoy-outline" link="./intern/hoe-veilig-varen" />
    <GridItem title="Meerjaren plan" icon="clipboard-outline" link="./intern/meerjaren-plan" />
    <GridItem title="Roosters" icon="cafe-outline" link="./intern/roosters" />
    <GridItem title="Huis stijl" icon="color-palette-outline" link="./intern/huis-stijl" />
    <GridItem title="Regelementen" icon="reader-outline" link="./intern/regelementen" />
    <GridItem title="Het venster" icon="book-outline" link="./intern/het-venster" />
  </Grid>
  
  <Grid header="Vereniging">
    <GridItem title="Bestuur" icon="people-circle-outline" link="./vereniging/bestuur" />
    <GridItem title="Vertrouwingpersoon" icon="shield-half-outline" link="./vereniging/vertrouingspersoon" />
    <GridItem title="Geschiedenis" icon="library-outline" link="./vereniging/geschiedenis" />
    <GridItem title="Commisies" icon="person-circle-outline" link="./vereniging/commisies" />
    <GridItem title="Vloten" icon="person-outline" link="./vereniging/vloten" />
    <GridItem title="Ereleden" icon="ribbon-outline" link="./vereniging/ereleden" />
    <GridItem title="Leden van verdiensten" icon="trophy-outline" link="./vereniging/leden-van-verdiensten" />
    <GridItem title="Oud proteus" icon="bonfire-outline" link="./vereniging/oud-proteus" />
  </Grid>

  <Grid header="Roeien">
    <GridItem title="Ploegen" icon="people-outline" link="./roeien/ploegen" />
    <GridItem title="Coach database" icon="server-outline" link="./roeien/coach-database" />
    <GridItem title="Prestaties / Records" icon="stopwatch-outline" link="./roeien/prestaties" />
    <GridItem title="Top roeien" icon="trending-up-outline" link="./roeien/top-roeien" />
    <GridItem title="Eerstejaars roeien" icon="person-outline" link="./roeien/eerstejaars-roeien" />
    <GridItem title="Ouderejaars roeien" icon="person-add-outline" link="./roeien/ouderejaars-roeien" />
  </Grid>
{:else}
  <Error>
    Dit pannel is alleen voor ingelogde leden. Je bent niet ingelogd.
  </Error>
{/if}