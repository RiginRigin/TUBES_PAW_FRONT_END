<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>PACE HOTEL</span>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text router to="/">HOME</v-btn>
        <v-btn text router to="/galerry">GALERY</v-btn>
        <v-btn text router to="/accomodation">ACCOMODATION</v-btn>
        <v-btn text router to="/facilities">FACILITIES</v-btn>
        <v-btn text router to="/aboutus">ABOUT US</v-btn>                
      </v-toolbar-items>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
