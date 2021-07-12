<template>
<v-card class="card">
    <v-card-title>
       User Create Confirm
    </v-card-title>
    <v-container>
       <form>
         <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
          <v-col md='2.5'>Name : Theint Haymann Hnin</v-col>
          <v-col md='2.5'>Email Address : thmh@gmail.com</v-col>
           <v-col md='2.5'>Password : 12345678</v-col>
           <v-col md='2.5'>Type : admin</v-col>
           <v-col md='2.5'>Phone : 0979805925 </v-col>
           <v-col md='2.5'>Date of Birth : 23456567</v-col>
           <v-col md='2.5'>Address : Yangon</v-col>
      <!-- <v-text-field v-model="name" type="text" 
      label="Name" :rules="nameRules" 
      hide-details="auto"></v-text-field>

      <v-text-field v-model="email" type="text" 
      label="Email" :rules="emailRules" 
      hide-details="auto" class="mt-5"></v-text-field>

      <v-text-field v-model="password" type="password" 
      label="Password" :rules="passwordRules" 
      hide-details="auto" class="mt-5"></v-text-field>

      <v-text-field v-model="confirm_password" type="password" 
      label="Confirm Password" :rules="confirm_pwdRules" class="mt-5"
      hide-details="auto"></v-text-field>

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
      hide-details="auto" class="mb-5 mt-5"></v-text-field>
       -->
      <v-btn
        class="mr-4 mt-5"
       @click="userCreate()"  color="success"
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

<script src="../../services/user/user-create-confirm.js">
</script>

<style scoped src="../../assets/css/pages/user/user-create-confirm.css">
</style>

