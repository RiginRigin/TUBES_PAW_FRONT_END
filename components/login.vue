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
      src="https://wallpapershome.com/images/pages/pic_h/424.jpg"
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
      <!-- Form Login -->
<v-card class="pa-md-4 mx-lg-auto"
        width="500"

>
 <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      align="center"
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
</v-card>
</template>
<p style="height:50px;"></p>
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
      <!-- <p style="height:50px;"></p> -->
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