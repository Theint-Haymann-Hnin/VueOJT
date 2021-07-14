<template>
<v-card class="card">
    <v-card-title>
       User Update
    </v-card-title>
    <v-container>
       <form>
            <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      <v-text-field v-model="name" type="text" 
      label="Name" :rules="nameRules" 
      hide-details="auto"></v-text-field>

      <v-text-field v-model="email" type="text" 
      label="Email" :rules="emailRules" 
      hide-details="auto" class="mt-5"></v-text-field>
      
     
      <!-- <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Type is required']"
        label="Type"
        required class="mt-5"
      ></v-select> -->

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
      hide-details="auto" class="mb-5 mt-5"></v-text-field>

      <v-card-text><a href="/change_password">Change Password</a></v-card-text>
      <v-btn
        class="mr-4 mt-5"
       @click="userUpdate()"  color="success"
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

<script src="../../services/user/user-update.js">
</script>
<style scoped src="../../assets/css/pages/user/user-update.css">
</style>

