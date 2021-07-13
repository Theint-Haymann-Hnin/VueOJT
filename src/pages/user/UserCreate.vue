<template>
<v-card class="card">
    <v-card-title>
       User Create
    </v-card-title>
    <v-container>
       <form>
      <v-text-field v-model="name" type="text" 
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
    
                      <!-- <v-select
                    v-model="type"                    
                    :items="type"
                    item-text="name"
                    item-value="id"
                    filled
                    label="Type"
                    dense  class="mt-5"
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

      <!-- <v-text-field v-model="profile" type="file" 
      label="Profile" 
      hide-details="auto" class="mb-5 mt-5"></v-text-field> -->


      <v-btn
        class="mr-4 mt-5"
       @click="confirmPage"  color="success"
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

<script src="../../services/user/user-create.js">
</script>

<style scoped src="../../assets/css/pages/user/user-create.css">
</style>

