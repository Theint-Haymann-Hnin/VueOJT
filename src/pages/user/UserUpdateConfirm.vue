<template>
<v-card class="card">
    <v-card-title>
       User Update Confirm
    </v-card-title>
    <v-container>
         <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
         <v-col md='2.5' xs4>Name : {{this.$route.params.name}}</v-col>
          <v-col md='2.5' xs4>Email Address : {{this.$route.params.email}}</v-col>
           <!-- <v-col md='2.5' xs4>Type : {{this.$route.params.type}}</v-col> -->
           <v-col md='2.5' xs4>Phone : {{this.$route.params.phone}} </v-col>
           <v-col md='2.5' xs4>Date of Birth : {{this.$route.params.dob}}</v-col>
           <v-col md='2.5' xs4>Address : {{this.$route.params.address}}</v-col>
    </v-container>
    <v-container>
       <form>
        
      <!-- <v-text-field v-model="name" type="text" 
      label="Name" :rules="nameRules" 
      hide-details="auto"></v-text-field>

      <v-text-field v-model="email" type="text" 
      label="Email" :rules="emailRules" 
      hide-details="auto" class="mt-5"></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Type is required']"
        label="Type"
        required class="mt-5"
      ></v-select>

      <v-text-field v-model="phone" type="text" 
      label="Phone" :rules="phoneRules" 
      hide-details="auto" class="mt-5"></v-text-field>

      <v-text-field v-model="address" type="text" 
      label="Address" :rules="addressRules" 
      hide-details="auto"  class="mt-5"></v-text-field>

      <v-text-field v-model="dob" type="date" 
      label="Date of Birth" :rules="dobRules" 
      hide-details="auto"  class="mt-5"></v-text-field>

      <v-text-field v-model="profile" type="file" 
      label="Profile" :rules="profileRules" 
      hide-details="auto" class="mb-5 mt-5"></v-text-field> -->
      
      <v-btn
        class="mr-4 mt-5"
       @click="updateUser()"  color="success"
      >
        Confirm
      </v-btn>
      <v-btn @click="clear()" color="secondary" class="mt-5">
        clear
      </v-btn>
    </form>
    </v-container>
</v-card>
</template>

<script src="../../services/user/user-update-confirm.js">
</script>

<style scoped src="../../assets/css/pages/user/user-update-confirm.css">
</style>
