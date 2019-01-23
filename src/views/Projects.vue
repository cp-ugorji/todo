<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container> 
  </div>
</template>

<script>
import db from '@/fb';

export default {
  data() {
    return{
      projects: [
          // { title: 'Design a new website', person: 'Chukwudi Ugorji', due: '1st Jan 2019', status: 'ongoing', content: 'some project content here' },
          // { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'completed', content: 'some project content here' },
          // { title: 'Design video thumbnails', person: 'Ogechi', due: '20t Dec 2018', status: 'completed', content: 'some project content here' },
          // { title: 'Create a community forum', person: 'Chun Lee', due: '21st Oct 2018', status: 'overdue', content: 'some project content here' },
        ]
    }
  }, 
  computed: {
    myProjects() {
      return this.projects.filter( project => {
        return project.person === 'Chukwudi Ugorji'
      })
    }
  },
  created() {
      db.collection('projects').onSnapshot(resp => {
        const changes = resp.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            this.projects.push({
              // ... means get everything related to this document
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    },
}
</script>
