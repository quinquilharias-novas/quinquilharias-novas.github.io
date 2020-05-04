<template lang="pug">
#app
  mu-appbar(style='width: 100%;' color='primary')
    mu-button(icon slot='left')
      mu-icon(value='menu') 
    i.fas.fa-sun.fa-2x.mr-15
    | Algazarra e Alvoroço LLC

    mu-menu(slot='right')
      mu-button(flat to="/about") 
        i.material-icons.md-36.mr-15 my_location
        | Gatos Puxados
      mu-list(slot='content')
        mu-list-item(button)
          mu-list-item-content
            mu-list-item-title Oiapoque
        mu-list-item(button)
          mu-list-item-content
            mu-list-item-title Chuí
        mu-list-item(button)
          mu-list-item-content
            mu-list-item-title Recife
        mu-list-item(button)
          mu-list-item-content
            mu-list-item-title Manaus
        mu-list-item(button)
          mu-list-item-content
            mu-list-item-title João Pessoa
        mu-list-item(button)
          mu-list-item-content
            mu-list-item-title Curitiba
        mu-list-item(button)
          mu-list-item-content
            mu-list-item-title Florianópolis
        mu-list-item(button)
          mu-list-item-content
            mu-list-item-title Porto Alegre
  router-view.
    
    
</template>

<style lang="scss">

</style>
