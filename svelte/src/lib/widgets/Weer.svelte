<script>
  import {WEER_API} from "$lib/logic/secrets"
  import Container from "$lib/components/Container.svelte"
  import Icon from "$lib/components/Icon.svelte";

  const [PE_LAT, PE_LON] = [51.992886, 4.372480]; // Latitude and Longditude of Proteus Eretes

  let random = Math.random();
  let background = "white";
  let border = "1px solid var(--light)";


  function getIcon(name) {
    switch (name) {
      case "bliksem":
        return "thunderstorm-outline";
      case "regen":
      case "buien":
      case "hagel":
      case "halfbewolkt_regen":
        return "rainy-outline";
      case "halfbewolkt":
        return "partly-sunny-outline";
      case "bewolkt":
      case "mist":
      case "nachtmist":
      case "wolkennacht":
      case "zwaarbewolkt":
        return "cloudy-outline";
      case "sneeuw":
        return "snow-outline"
      default: 
        return "sunny-outline"
    }
  } 

  async function checkWeather() {
    // get API
    const weather = await fetch(`https://weerlive.nl/api/json-data-10min.php?key=${WEER_API}&locatie=${PE_LAT},${PE_LON}`)
    const weatherJson = await weather.json()
    const {windbft, temp, samenv, windr, zicht, d0weer} = weatherJson.liveweer[0]

    background = "var(--red-light)"; border = "1px solid var(--red)";
    if (d0weer == 'bliksem') return {icon: "thunderstorm-outline", title: "Er is een vaarverbod", message: "Het bliksemt" }

    if (d0weer == 'hagel') return {icon: "rainy-outline", title: "Er is een vaarverbod", message: "Het hagelt" }

    if (d0weer == 'mist') return {icon: "cloudy-outline", titile: "Er is een vaarverbod", message: `Er is mist met ${zicht}km zicht`}

    if (temp <= 0) return {icon: "snow-outline", title: "Er is een vaarverbod", message: `Het is ${temp}graden`}

    if (windbft >= 7) return {icon: "warning-outline", title: "Er is een vaarverbod", message: `Er staat wind kracht ${windbft}`}

    background = "white"; border = "1px solid var(--light)";
    return {icon: getIcon(d0weer), title: samenv, message: `Het is ${temp}℃ met windkracht ${windbft}bft en windrichting ${windr}.` }
  }

  // Check if it is dark outside and not bad weather
  async function getWeather() {
    const sunPosition = await fetch(`https://api.sunrise-sunset.org/json?lat=${PE_LAT}&lng=${PE_LON}`)
    const {results, status} = await sunPosition.json();

    if (status != "OK") return {icon: "warning-outline", title: "Er ging iets mis met het ophalen van de weer gegevens, probeer later te herladen." }
  
    const sunriseDate = {hours: new Date(`00 ${results.sunrise}`).getHours(), minutes: new Date(`00 ${results.sunrise}`).getMinutes()}
    const sunsetDate = {hours: new Date(`00 ${results.sunset}`).getHours(), minutes: new Date(`00 ${results.sunset}`).getMinutes()}
    const currentDate = {hours: new Date().getHours(), minutes: new Date().getHours()}

    if ((currentDate.hours >= sunsetDate.hours && currentDate.minutes >= sunsetDate.minutes) ||
        (currentDate.hours <= sunriseDate.hours && currentDate.minutes <= sunriseDate.minutes)
    ) {
      background = "var(--red-light)"
      border = "1px solid var(--red)"
      return {icon: "moon-outline", title: "Er is momenteel een vaarverbod.", message: `Het is donker, morgen vanaf ${sunriseDate.hours}:${sunriseDate.minutes} mag er weer geroeit worden.`}
    }

    return checkWeather()
  }
</script>

<style>
  .weerLayout {
    display: flex;
  }

  .text {
    margin-left: 1em;
  }
</style>

{#key random}
  <Container header="Weer" links={[{title: "Herlaad", action: () => {random = Math.random(); getWeather()}}, {title: "Meer info", href:"weer"}]} --background={background} --border={border}>
    {#await getWeather()}
      <div class="weerLayout">
        <Icon --size="2em" name="hourglass-outline" />
        <div class="text">
          <div class="bold">Laden...</div>
        </div>
      </div>
    {:then weer} 
      <div class="weerLayout">
        <Icon --size="2em" name={weer.icon} />
        <div class="text">
          <div class="bold">{weer.title}</div>
          {weer.message}
        </div>
      </div>
    {/await}
  </Container>
{/key}