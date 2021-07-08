<template>
<v-card class="card">
    <v-card-title>
       User Profile
    </v-card-title>
    <v-container>
        <v-row class="mt-5 mb-5">
             <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
            <v-btn color="success">
                       <v-icon left>
                    edit
                    </v-icon> Edit</v-btn>
        </v-row>
     <v-row ma-0 pa-0 fill-height>
                <v-col md='2.5' xs4>Name </v-col>
                <v-col md='2.5' xs4>Theint Haymann Hnin</v-col>
      </v-row>
       <v-row ma-0 pa-0 fill-height>
                <v-col md='2.5' xs4>Email Address </v-col>
                <v-col md='2.5' xs4>thmh@gmail.com</v-col>
      </v-row>
       <v-row ma-0 pa-0 fill-height>
                <v-col md='2.5' xs4>Type </v-col>
                <v-col md='2.5' xs4>Admin</v-col>
      </v-row>
       <v-row ma-0 pa-0 fill-height>
                <v-col md='2.5' xs4>Phone </v-col>
                <v-col md='2.5' xs4>09798059425</v-col>
      </v-row>
       <v-row ma-0 pa-0 fill-height>
                <v-col md='2.5' xs4>Date of Birth </v-col>
                <v-col md='2.5' xs4>2123456</v-col>
      </v-row>
       <v-row ma-0 pa-0 fill-height>
                <v-col md='2.5' xs4>Address </v-col>
                <v-col md='2.5' xs4>ertyuiert</v-col>
      </v-row>
    </v-container>
</v-card>
</template>

<script src="../../services/user/userprofile.js">
</script>

<style scoped src="../../assets/css/pages/user/userprofile.css">
</style>

