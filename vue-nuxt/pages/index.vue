<template>
  <div>
    <Popup :visible="!!access_token" @close="goHome">
      <h1>Reset password</h1>

      <form @submit.prevent="resetPassword">
        <Input :value="store_email" type="email" disabled />
        <Input
          v-model="password"
          autocomplete="new-password"
          placeholder="new-password"
          type="password"
        />
        <Input type="submit" value="reset" />
        <div v-if="error">{{ error }}</div>
      </form>
    </Popup>

    <FotoContainer
      src="https://proteus-eretes.nl/fotodir/9/9719466455379747209036022605006758121769484342551754858607478390_l.jpg"
    />

    <Grid header="Snelle links">
      <GridItem title="Contact" icon="at-outline" link="./contact" />
      <GridItem title="Info" icon="information-outline" link="./lid-worden" />
      <GridItem title="Diensten" icon="videocam-outline" link="./diensten" />
      <GridItem
        title="Evenementen"
        icon="ticket-outline"
        link="./evenementen"
      />
    </Grid>

    <!-- TODO: Partners -->
    <Container
      header="Partners"
      link="{title:'Partners', internLink: './partners'}"
    >
      <h3>Hier komen alle partners naast elkaar te staan</h3>
    </Container>

    <!-- TODO: Nieuws -->
    <Container header="Nieuws" :style="{ '--height': '15em' }">
      <h3>Hier komt het laatste nieuws als infinite scrollable lijst</h3>
    </Container>

    <Container
      :key="x"
      v-for="x in new Array(10)"
      :style="{ '--height': '15em' }"
    >
      <h3>Hier komt het laatste nieuws als infinite scrollable lijst</h3>
    </Container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'test',
      email: '',
      password: '',
      error: '',
      access_token: '',
    }
  },
  computed: {
    userid() {
      return this.$store.getters['user/id'] || 'null'
    },
    store_email() {
      return this.$store.getters['user/email'] || 'null'
    },
  },
  mounted() {
    const hash = this.$route.hash
    if (hash.includes('access_token=')) {
      const queries = {}

      hash
        .substring(1)
        .split('&')
        .forEach((q) => {
          const [key, value] = q.split('=')
          queries[key] = value
        })

      this.email = this.$store.getters['user/email']
      this.access_token = queries.access_token
    }
  },

  methods: {
    async resetPassword() {
      const { error } = await this.$supabase.auth.api.updateUser(
        this.access_token,
        {
          password: this.password,
        }
      )

      if (error) {
        this.error = error.message
      } else {
        this.goHome()
      }
    },
    async logout() {
      await this.$supabase.auth.signOut()
    },
    goHome() {
      this.access_token = ''
      this.$router.push('/')
    },
  },
}
</script>
