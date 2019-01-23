<template>
<!-- v-app is the root component and must be present in vuetify
class gray means you want the background of the while page to be 
grey and lighten-4 means you want it to be very light grey -->
  <v-app class="grey lighten-4">
    <!-- Navbar to act as the header  -->
    <Navbar/>

   <!-- v-content is the content area where all our 
   page/component should reside.
   we can decide to have the header or nav above v-content 
   and footer below it. 
   mx-4 {property}{direction}-{size} means 
   you want a margin(m) in the 
   direction(x) - spacing to the left and right and 
   a size(4) - check out vuetify documentation and search
   for margin -->
    <v-content class="mx-4 mb-4">
      <!--within the v-content is where we want all our 
      routes to toggle so we place our view router here-->
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',

  components: {
    Navbar
  },

  data () {
    return {
      //
    }
  }
}
</script>
