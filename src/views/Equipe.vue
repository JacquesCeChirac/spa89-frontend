<template>
  <v-container>
    <v-layout
        wrap
    >
      <v-flex mb-4>
        <h1 class="text-xs-center display-2 font-weight-bold mb-3">L’EQUIPE</h1>
        <img :src="require('../assets/logo-spa-officiel.png')" alt="logo spa 89 Auxerre ">
        <p>La SPA 89 AUXERRE, est composé d’un Conseil d’Administration, de salariées et de bénévoles.</p>

        <h2 class="text-xs-center">CONSEIL D’ADMINISTRATION</h2>
        <p>Le conseil est composé de 10 membres, tous bénévoles. Ils s’acquittent avec sérieux de leurs missions, conseil et décision.
          Ils sont tous issus d’horizon professionnels divers.</p>
        <ul>
          <li>Daniel CARTEREAU			Président</li>
          <li>Valérie CARTEREAU			1ère Vice-présidente</li>
          <li>Marie-Claire AURICOSTE		2ème Vice-présidente</li>
          <li>Chantal BOUDESOQUE		Secrétaire</li>
          <li>Patrick KELDER				Trésorier</li>
          <li>Lisiane FOSSIER-DUVAL		Membre</li>
          <li>Véronique PLOQUIN			Membre</li>
          <li>Nadine CHARLIER			Membre</li>
          <li>Stéphanie PARIGOT-LERAT		Membre</li>
        </ul>

        <h2 class="text-xs-center">LES SALARIEES</h2>
        <p>Elisabeth, Vanessa et Chrystal assurent l’intégralité de la gestion des chenils, chatteries et infirmeries et parcs,
          ce qui représente 52 box une cinquantaine de chiens, 7 chatteries pour une soixantaine de  chats, 2 infirmeries, et 7 parcs.
          Elles assurent aussi les repas, et les soins à prodiguer aux animaux hors vétérinaire.</p>
        <p>Elles ont en charge également de conduire les animaux chez notre vétérinaire.</p>
        <p>Elles sont parfois aussi appelées à biberonner les nouveaux nés, pour soulager les mamans, quand leur progéniture est trop nombreuse.</p>

        <h2 class="text-xs-center">LES BENEVOLES</h2>
        <p>Ce sont ceux qui assurent les promenades des chiens dans les parcs ou en extérieur, les caresses des chats, et leur brossage,
          qui participent à la tenue de stands lors de journées portes ouvertes, ou lors de collectes de nourriture dans les magasins.</p>
        <p>Il est difficile de tous les citer, car ils sont en moyenne une centaine, certains plus assidus que d’autres.
          Nous les remercions car sans eux, le refuge n’existerait pas.</p>
        <p>Toute la gestion administrative, est effectuée par des bénévoles, membre du conseil d’administration.</p>
        <p>Certains ont une fonction particulière.</p>
        <ul>
          <li>Chantal, Alain, Sylvie, Valérie pour les enquêtes de maltraitance ou négligence sur animaux,</li>
          <li>Marie-Claire responsable entrées chats, et adoptions,</li>
          <li>Lisiane, responsable ICAD et demande de stage,</li>
          <li>Véronique, responsable ICAD,</li>
          <li>Nadine, responsable gestion collectes nourriture,</li>
          <li>Stéphanie, responsable des bénévoles chats</li>
          <li>Denis, responsable des bénévoles chiens,</li>
          <li>Karine, Denis, Dominique et Odile voir le nom, pour les suivis d’adoption,</li>
        </ul>

        <h2 class="text-xs-center">NOTRE VETERINAIRE</h2>
        <p>Un partenariat avec la Clinique du Sel des Buissons de Villefargeau a été signé avec notre refuge.</p>
        <p>Cette clinique a en charge nos animaux, pour les ovariectomies, castrations, chirurgies diverses, de tous les soins nécessaires.</p>
        <p>Des visites sont faites au refuge régulièrement par le vétérinaire, pour des soins ne nécessitant pas de déplacement à la clinique.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

</script>

<style>
  ul {
    list-style-type: none;
  }
  #green-one {
    color: rgb(3, 161, 48);
  }
  h1, h2, h3 {
    margin-bottom: 25px;
    margin-top: 25px;
  }
</style>
