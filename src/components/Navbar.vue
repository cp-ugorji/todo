<template>
    <nav>
        <!-- creating snackbar to show successful notification if 
        new project was successfully added-->
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project</span>
            <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <!-- creating toolbar -->
        <v-toolbar flat app>
            <!-- navigation drawer icon -->
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <!-- toobar title -->
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Stealth</span>
            </v-toolbar-title>
            <!-- spacer to push toolbar title and button far apart -->
            <v-spacer></v-spacer>
            <!-- dropdown menu -->
            <v-menu offset-y>
                <v-btn flat slot="activator" color="grey">
                    <v-icon left>expand_more</v-icon>
                    <span>Menu</span>
                </v-btn>

                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <!-- signout button -->
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <!-- navigation drawer -->
        <!-- this will never show without the app prop 
        and even with the app prop, it wouldn't display properly
        so we need the navigation icon above to be able to show/hide it
        using the v-model binder to toggle between true or false -->
        <v-navigation-drawer v-model="drawer" app class="primary">
           <!-- adding avatar and name -->
           <v-layout column align-center>
               <!-- avatar -->
               <v-flex class="mt-5">
                   <v-avatar size="100">
                       <img src="/avatar-1.png" alt="">
                   </v-avatar>
                   <p class="white--text subheading mt-1">
                        Chukwudi Ugorji
                    </p>
               </v-flex>
               <!-- adding popup -->
               <v-flex class="mt-4 mb-3">
                   <!--  @projectAdded="snackbar = true" means 
                   listen to the popup if the project has been successfullt added
                   then set the snackbar to true and show the snackbar above-->
                   <Popup @projectAdded="snackbar = true"/> 
               </v-flex>
           </v-layout>
            <!-- adding link list-->
            <v-list>
                <!-- adding links -->
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <!-- list icon -->
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <!-- link text -->
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup';

export default {
    components: { Popup },
    data(){
        return{
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/' },
                { icon: 'folder', text: 'My Projects', route: '/projects' },
                { icon: 'person', text: 'Team', route: '/team' },
            ],
            snackbar: false
        }
    }
}
</script>
