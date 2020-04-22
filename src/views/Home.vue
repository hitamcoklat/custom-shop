<template>
<div>
  <div style="max-width: 500px;" class="container">
<b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-dropdown label="Category">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
    <div style="width: 100%; padding-left: 1.2em;">
      <router-link to="/kaos">
        <figure class="image kotak">
          <img v-bind:src="this.$urlAsset + '/img/icon/kaos-custom.png'">
        </figure>        
      </router-link>      
      <figure class="image kotak">
          <img v-bind:src="this.$urlAsset + '/img/icon/case-custom.png'">
      </figure>      
      <figure class="image kotak">
          <img v-bind:src="this.$urlAsset + '/img/icon/jaket-custom.png'">
      </figure>      
      <figure class="image kotak">
          <img v-bind:src="this.$urlAsset + '/img/icon/totebag-custom.png'">
      </figure>    
      <figure class="image kotak">
          <img v-bind:src="this.$urlAsset + '/img/icon/mug-custom.png'">
      </figure>    
      <figure class="image kotak">
          <img v-bind:src="this.$urlAsset + '/img/icon/sticker-custom.png'">
      </figure>    
    </div>
  </div>
</div>
</template>

<style scoped>
  figure {
    margin: 1px;
  }
  .kotak {
    float: left; 
    width: 43.7%; 
    border: 1px solid #ccc; 
    padding: 0.5em; 
    border-radius: 10px; 
    margin: 5px;
  }
</style>

<script>

export default {
  name: 'Home',
  data: () => ({
    isShowModal: false,
  })
}
</script>
