<template lang="pug">
.frow-container
	.frow.centered
		.col-md-1-3.width-100.text-center(style="margin-top: calc(15vh)")
			h1
				i.fas.fa-sun.fa-5x
			h1 Quinquilharias Novas
			h2.mb-20 Bagunça e Baderna Sem Fim
			mu-button.mr-20(large color="error" to="/") Dentro 
			mu-button.mr-20(large color="secondary" to="/") Fora 
			mu-button(large color="primary" to="/about") Embora

</template>

<script>

</script>

<style scoped>

mu-flex {
	display: flex;
	flex-direction: column;
}

mu-button:hover {
	color: fffddd;
	text-decoration: none;
}
</style>