<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <!-- this is where we want to put all the content of our page
    it has already defined margin and padding and can handle a grid
    system perfectly -->
    <v-container class="my-5">

        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                <v-card flat class="text-xs-center ma-3">
                    <!-- adding image -->
                    <v-responsive class="pt-4">
                        <v-avatar size="100" class="grey lighten-2">
                            <img :src="person.avatar" alt="">
                        </v-avatar>
                    </v-responsive>
                    <!-- adding person detail -->
                    <v-card-text>
                        <div class="subheading">{{ person.name }}</div>
                        <div class="grey--text">{{ person.role }}</div>
                    </v-card-text>
                    <!-- adding action -->
                    <v-card-actions>
                        <v-btn flat color="grey">
                            <v-icon small left>message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
      return{
          team: [
              {name: 'Chukwudi Ugorji', role: 'Web developer', avatar: '/avatar-1.png'},
              {name: 'Ogechi', role: 'Graphic designer', avatar: '/avatar-2.png'},
              {name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png'},
              {name: 'Kali', role: 'Social media maverick', avatar: '/avatar-4.png'},
              {name: 'Chun Lee', role: 'Web developer', avatar: '/avatar-5.png'},
          ]
      }
  }
}
</script>
