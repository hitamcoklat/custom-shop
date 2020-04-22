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
    <div style="width: 100%; padding-left: 1.5em; padding-right: 1.5em;">
        <h1>Detail Kaos</h1>    
        <br />
        <div class="columns is-mobile">
            <div 
                v-on:click="pilihKaos('lenganPendek')" 
                ref="lenganPendek" 
                id="lenganPendek"
                class="column kotak"
            >
                Lengan Pendek
            </div>
            <div 
                v-on:click="pilihKaos('lenganPendekVNeck')" 
                id="lenganPendekVNeck"
                style="margin-left: 10px;" 
                class="column kotak"
            >
                V Neck
            </div>
        </div>      
        <div class="columns is-mobile">
            <div
                v-on:click="pilihKaos('lenganPanjang')" 
                id="lenganPanjang"
                class="column kotak"
            >
                Lengan Panjang
            </div>
            <div
                style="margin-left: 10px;" 
                v-on:click="pilihKaos('kaosAnak')" 
                id="kaosAnak"
                class="column kotak"
            >
                Kaos Anak
            </div>
        </div>      
        <div class="columns is-mobile">
            <div
                v-on:click="pilihKaos('raglan34')" 
                id="raglan34"
                class="column kotak"
            >
                Kaos Raglan 3/4
            </div>
            <div
                style="margin-left: 10px;" 
                v-on:click="pilihKaos('raglan34Anak')" 
                id="raglan34Anak"
                class="column kotak"
            >
                Kaos Raglan 3/4 Anak
            </div>
        </div>      
    </div>
    <br clear="all" />
    
    <div v-if="jenisKaos !== ''" style="width: 100%; padding-left: 0.7em; padding-right: 0.7em; clear: both;">
        <b-message style="background-color: white;" title="Foto Kaos" :closable="false" type="is-info">
            <b-button v-on:click="sisiKaos(jenisKaos)" outlined type="is-primary">
                <font-awesome-icon icon="sync-alt" />
                Sisi Lain</b-button>
            <img style="background-color: black;" v-bind:src="this.$urlAsset + this.foto" /> 
        </b-message>        
    </div>
    <br clear="all" />
    <div v-if="jenisKaos !== ''" style="width: 100%; padding-left: 0.7em; padding-right: 0.7em; clear: both;">
        <b-button v-on:click="lanjut" style="height: 47px;" type="is-success" is-large rounded expanded>Mulai Custom <font-awesome-icon style="font-size: 20px;" icon="hand-point-right" /></b-button>
    </div>    
    <br clear="all" />
  </div>
</div>
</template>

<style scoped>
  figure {
    margin: 1px;
  }
  .columns {
      margin-top: 5px;
  }
  .kotak {
      padding-top: 1em;
      padding-bottom: 1em;
      text-align: center; 
      border: 1px solid #CCC; 
      border-radius: 5px;
      font-size: 0.8em;
      cursor: pointer;
  }
  .blue {
      background-color: #0873BB;
      color: white;
  }
</style>

<script>

import { requestServer } from "@/api";

export default {
    name: 'DetailKaos',
    data: () => ({
        isShowModal: false,
        jenisKaos: "",
        tampilanDepan: false,
        foto: "",
        dataKaos: []
    }),
    methods: {

        fetchData: async function() {
            const response = await requestServer(this.$urlAsset + '/json/product-kaos.js', 'get')
        },

        pilihKaos: function(jenisKaos) {
            if(this.jenisKaos !== '') {
                document.getElementById(this.jenisKaos).classList.remove('blue');
            }
            this.jenisKaos = jenisKaos;
            document.getElementById(jenisKaos).classList.add('blue');

            // set foto
            this.foto = this[jenisKaos][0].front
            this.tampilanDepan = true;
        },
        sisiKaos: function(jenisKaos) {
            this.tampilanDepan = !this.tampilanDepan;
            if(this.tampilanDepan) {
                this.foto = this[jenisKaos][0].front
            } else {
                this.foto = this[jenisKaos][0].back
            }
            // this.foto = jenisKaos.front;
        },
        lanjut: function() {
            // console.log(this.jenisKaos)
            let dataOrder = {
                jenisKaos: this.jenisKaos,
                fotoClear: this[this.jenisKaos]
            };
            console.log(dataOrder)
            this.$store.commit('ADD_CART', dataOrder);
        }
    },

    created() {
        this.fetchData();
    }
}
</script>
