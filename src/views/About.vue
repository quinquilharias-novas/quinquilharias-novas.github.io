<template lang="pug">
.frow-container
	.frow.centered.text-center
		.col-md-1-2.width-100(style="margin-top: calc(15vh)")
			h1
				i.fas.fa-sun.fa-5x
			h1.mb-1 Sobre Bagunça e Baderna
			h2.mb-30 Gambiarras e Algzarras

			mu-button.mr-20(large color="secondary" to="/") Apertar 
			mu-button.mr-20(large color="primary" to="/about") Acordar 
			mu-button(large color="secondary" @click='openAlertDialog') 
				i.material-icons.md-48.mr-10 beach_access
				| Está na Modal

	mu-dialog(title='All Greek To You Too?' width='600' max-width='80%' :esc-press-close='false' :overlay-close='false' :open.sync='openAlert')
		i.fas.fa-university.fa-4x.fa-pull-left.p-10
		| Cθ οδιο μθcιθσ ηισ, εθμ αλιι γραεcε δελιcατισσιμι ιδ, θτ παθλο qθαλισqθε εοσ. Ειρμοδ οπτιον qθαεστιο ιν μει. Cετεροσ αccθσαμθσ vιμ τε. Ενιμ cονσθλ ατομορθμ πρι ιν, νο ιγνοτα σθσcιπιαντθρ εοσ. Νονθμεσ προβατθσ vολθπτατιβθσ εαμ θτ, ωισι φιερεντ δελεcτθσ αδ vελ. Πριμισ εριπθιτ vθλπθτατε νο μει, τε qθι λεγιμθσ σθσcιπιτ περιcθλισ. Ερατ προπριαε ετ δθο, ιριθρε cορπορα μενανδρι εα εθμ.

		mu-button(slot='actions' raised color='primary' @click='closeAlertDialog') Plato
		mu-button(slot='actions' raised color='secondary' @click='closeAlertDialog') Aristotle

</template>

<script>
export default {
  data () {
    return {
      openAlert: false
    };
  },
  methods: {
    openAlertDialog () {
      this.openAlert = true;
    },
    closeAlertDialog () {
      this.openAlert = false;
    }
  }
};
</script>

<style>
.home {
	height: calc(100vh - 100px);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}

</style>