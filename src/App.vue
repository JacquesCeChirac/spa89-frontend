<template>
  <v-app>
    <v-toolbar app style="background-color: #b3e2c0">
      <v-toolbar-title class="headline text-uppercase">
        <span></span>
        <v-menu offset-y>
          <v-btn slot="activator" color="#03a130" dark>
            Accueil
          </v-btn>
        </v-menu>
        <v-menu offset-y open-on-hover=true >
        <v-btn slot="activator" color="#03a130"dark>
          SPA 89 Auxerre
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, index) in SPA" :key="index" @click="">
            <a :href="item.route"><v-list-tile-title>{{ item.title }}</v-list-tile-title></a>
          </v-list-tile>
        </v-list>
        </v-menu>
        <v-menu offset-y open-on-hover=true>
          <v-btn slot="activator" color="#03a130" dark>
            Adoptions
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in ADOPTIONS" :key="index" @click="">
              <a :href="item.route"><v-list-tile-title>{{ item.title }}</v-list-tile-title></a>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y open-on-hover=true>
          <v-btn slot="activator" color="#03a130" dark>
            Conseils
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in CONSEILS" :key="index" @click="">
              <a :href="item.route"><v-list-tile-title>{{ item.title }}</v-list-tile-title></a>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y open-on-hover=true>
          <v-btn slot="activator" color="#03a130" dark>
            Nous aider
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in NOUSAIDER" :key="index" @click="">
              <a :href="item.route"><v-list-tile-title>{{ item.title }}</v-list-tile-title></a>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y open-on-hover=true>
          <v-btn slot="activator" color="#03a130" dark>
            Vie du refuge
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in VIE" :key="index" @click="">
              <a :href="item.route"><v-list-tile-title>{{ item.title }}</v-list-tile-title></a>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="" target="_blank">
        <span class="mr-2">Connexion</span>
      </v-btn>
      <v-avatar
              :tile="logo"
              :size="avatarSize"
              color="grey lighten-4"
      >
        <img :src="require('../src/assets/logoSPA89.jpeg')" alt="avatar">
      </v-avatar>
    </v-toolbar>

    <v-content style="background: linear-gradient(#fff,#fff 40%,#d1ede0);">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      SPA: [
        { title: `Présentation`, route : `presentation` },
        { title: `Actualités`, route : `actualites` },
        { title: `L'équipe`, route : `equipe` },
        { title: `Statut`, route : `statut` }
      ],
      ADOPTIONS: [
        { title: `Conditions`, route : `conditions` },
        { title: `Chats`, route : `chats` },
        { title: `Chiens`, route : `chiens` },
        { title: `Nouveaux Animaux de compagnie`, route : `nac` },
        { title: `Déjà à adopter`, route : `adopted` },
        { title: `Chiens et chats qui nous ont quitté`, route : `rip` },
        { title: `Suivis d'adoption`, route : `suivis` },
        { title: `Histoires d'animaux`, route : `histoires` }
      ],
      CONSEILS: [
        { title: `Recommandations`, route : `recommandations` },
        { title: `Santé`, route : `sante` },
        { title: `Identification`, route : `identification` },
        { title: `Stérilisation`, route : `sterilisation` },
        { title: `Législation et maltraitance`, route : `legislation` },
        { title: `Signaler une maltraitance`, route : `signaler` },
        { title: `Actions sur nos enquêtes`, route : `actions` },
     ],
    NOUSAIDER: [
      { title: `Dons et legs`, route : `dons` },
      { title: `Adhésion/cotisation`, route : `adhesion` },
      { title: `Devenir bénévole`, route : `benevole` },
      { title: `Stérilisation`, route : `sterilisation` },
    ],
    VIE: [
      { title: `Informations aux adhérents`, route : `adherents` },
      { title: `Assemblées générales`, route : `assemblees` },
      { title: `Journées portes ouvertes`, route : `jpo` },
      { title: `Bulletin info`, route : `bulletin` }
    ]
  }
  }
}
</script>
<style>
  a{
    color: black !important;
    text-decoration: none;
  }
</style>
