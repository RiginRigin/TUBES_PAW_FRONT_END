<template>
    <div class="dashboard">
        
  <template>
  <v-card
    class="mx-auto"
    max-width="4000"
  >
    <v-img
      class="white--text align-end"
      height="400px"
      src="https://wallpapershome.com/images/pages/pic_h/4610.jpg"
    >
      <v-card-title>Rasakan Sensasinya</v-card-title>
    </v-img>


<!-- user logout -->
    <v-card-actions>
      <v-btn
        color="green"
        text
      >
        USER
      </v-btn>

      <v-btn  variant="danger"
        color="red"
        text
      >
        Logout
      </v-btn>
    </v-card-actions>
    <p style="height=200px"></p>
  </v-card>
<!-- batas user logout -->

</template>
<template >
      <!-- kotak awards -->
  <v-card
   max-width="344"
    
  >
    <v-img 
      src="https://png.pngtree.com/png-clipart/20190116/ourlarge/pngtree-golden-trophy-cup-trophy-hand-drawn-trophy-cartoon-trophy-png-image_407677.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Awards
    </v-card-title>

    <v-card-subtitle>
      Awards of Pace Hotel
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="yellow"
        text
      >
        Read More
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Award yang diperoleh pace hotel sangat banyak sampai saya sendiri lupa.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

<!-- kotak activities -->
   <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img 
      src="https://img.pngio.com/index-of-pub-1st-year-html-cv-html-2-activities-png-250_252.png"
      height="200px"
    ></v-img>

    <v-card-title>
      Activities
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="yellow"
        text
      >
        Read More
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show2 = !show2"
      >
        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show2">
        <v-divider></v-divider>

        <v-card-text>
          aktivitas yang dapat dilakukan di pace hotel ini ada berbagai macam, yaitu..
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  <!-- kotak locations -->
  
  <v-card
   max-width="344"
    
  >
    <v-img
      src="https://cdn3.iconfinder.com/data/icons/map-and-navigation-1-2/49/39-512.png"
      height="200px"
    ></v-img>

    <v-card-title>
      Location
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="yellow"
        text
      >
        Read More
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show3 = !show3"
      >
        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show3">
        <v-divider></v-divider>

        <v-card-text>
          Lokasi pace hotel terletak di jl.malioboro..
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<!-- batas 2 -->
<!-- footer -->
    <v-footer
    white
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <p style="height:200px;"></p>
      <v-card-title class="teal" >
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon = "mdi-facebook"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 black--text text-center">
        {{ new Date().getFullYear() }} — <strong>@copyright PACE HOTEL</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    <!-- Batas Footer -->
    </div> 
</template>


<script>
  export default {
    data: () => ({
      show: false,
      show2: false,
      show3: false,
    }),
  }
</script>