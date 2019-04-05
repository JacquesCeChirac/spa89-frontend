<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Bienvenue sur le site de la SPA89 - Auxerre</h1>
        <h2>Présentation</h2>
        <p>Notre association se nomme « Société pour la défense des animaux de Bourgogne et de Franche-Comté » et elle gère, à Dijon, le refuge dit « des cailloux » parce que la rue dans laquelle il se trouve s’appelait autrefois « le chemin des cailloux ».</p>
        <p>Voilà pourquoi les dijonnais ont pris l’habitude d’évoquer la « SPA des cailloux » pour parler à la fois du refuge et de l’association.</p>
        <p>Vous ne trouverez, sur notre site, ni animation racoleuse, ni « flash » destiné à retenir pendant quelques secondes l’attention d’un internaute distrait, ni aucun de ces procédés informatiques que les publicitaires utilisent à profusion.</p>
        <p>Ce n’est pas, mais alors là pas du tout, notre style. En revanche, si vous recherchez des informations sérieuses sur la protection animale, si vous êtes viscéralement opposé à la pratique de l’euthanasie, si les égards et le respect qui sont dûs à tout être vivant ont pour vous plus d’importance encore que le plaisir qu’on peut retirer de la compagnie d’un animal, alors ce site est fait pour vous.</p>
        <p>Prenez le temps de parcourir nos rubriques, ne « surfez » pas trop… Et si nos idées vous plaisent, si nos actions vous semblent justes, alors rejoignez-nous !</p>
        <h2>Nos derniers animaux à l'adoption</h2>
        <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex
                      v-for="n in 6"
                      :key="n"
                      xs4
                      d-flex
              >
                <v-card flat tile class="d-flex">
                  <v-img
                          :src="`https://picsum.photos/500/300?image=40`"
                          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                          aspect-ratio="1"
                          class="grey lighten-2"
                  >
                    <v-layout
                            slot="placeholder"
                            fill-height
                            align-center
                            justify-center
                            ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style>

</style>
