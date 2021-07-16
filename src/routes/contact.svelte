<script>
  import Container from '$lib/components/Container.svelte'

  import navigationStore from '$lib/logic/navigationStore'

  navigationStore.set(["Bestuur", "Financieel", "Adres", "Wettelijk", "Commissies"])
</script>

<Container header="Bestuur">
  <div class="bold">Telefoon:</div>
  <a href="tel:+310152623720">(015) 2623720</a> <br>

  Bij andere gebouw gerelateerde vragen kunt u contact opnemen via 
  <a href="tel:+316 457 631 62">+316 457 631 62 (Coen Jansen)</a><br>

  <div class="bold">Email:</div>
  <a href="mailto: info@proteus-eretes.nl">info@proteus-eretes.nl</a><br>

  <div class="bold">Sociëteit:</div>
  <a href="mailto: tbeheer.secretaris@proteus-eretes.nl">tbeheer.secretaris@proteus-eretes.nl</a><br> 
</Container>

<Container header="Financieel">
  Voor vragen over de contributie of facturen kunt u contact opnemen met <a class="inline" href="mailto: penningmeester@proteus-eretes.nl">penningmeester@proteus-eretes.nl</a>.

  <h3>Rekeninginformatie</h3>
  <div class="bold">ABN AMRO</div>

  D.S.R. Proteus-Eretes<br>
  IBAN - NL28 ABNA 0522 1405 80 <br>
  BIC - ABNANL2A <br>

  <div class="bold">Rabobank:</div>
  D.S.R. Proteus-Eretes<br>
  IBAN - NL44 RABO 0103 4052 40<br>
  BIC - RABONL2U

  <div class="bold">Aquisitie:</div>
  Voor samenwerkingen mail <a class="inline" href="mailto:	business@proteus-eretes.nl">www.proteus-eretes.nl/business</a>
</Container>

<Container header="Adres">
  D.S.R. Proteus-Eretes <br>
  Rotterdamseweg 362A <br>
  2628AT Delft <br><br>

  Postadres: <br> 
  Postbus 322 <br>
  2600 AH Delft <br>
</Container>

<Container header="Wettelijk">
  <div class="bold">KvK nummer:</div>
  40397044<br><br>

  <div class="bold">BTW- nummer</div>
  NL 803836260B01<br><br>

  <div class="bold">RSIN</div>
  803836260<br><br>
</Container>

<Container header="Commissies">
  <div class="bold">LUCIE (Lustrum commisssie)</div>
  <a class="inline" href="mailto: webcie@proteus-eretes.nl">	lustrum@proteus-eretes.nl</a> of <a class="inline" href="proteus-eretes.nl/lustrum">proteus-eretes.nl/lustrum</a><br><br>

  <div class="bold">VVC (Botentransport commissie)</div>
  <a href="mailto: vvc@proteus-eretes.nl"> vvc@proteus-eretes.nl</a><br>

  <div class="bold">PEiL (PEiL commissie)</div>
  <a href="mailto: peil@proteus-eretes.nl"> peil@proteus-eretes.nl</a><br>

  <div class="bold">WinterWedstrijd (Winter wedstrijd commissie)</div>
  <a href="mailto: info.winterwedstrijden@proteus-eretes.nl"> info.winterwedstrijden@proteus-eretes.nl</a><br>

  <div class="bold">IRIS (Tijdwaarneming commissie)</div>
  <a class="inline" href="mailto: info@poweredbyiris.nl"> info@poweredbyiris.nl</a> of <a class="inline" href="http://www.poweredbyiris.nl">poweredbyiris.nl</a> <br><br>

  <div class="bold">WebCie (Website commissie)</div>
  <a href="mailto: info.winterwedstrijden@proteus-eretes.nl"> info.winterwedstrijden@proteus-eretes.nl</a><br>
</Container>