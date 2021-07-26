<template>
  <v-card class="card">
    <v-card-title> User Update </v-card-title>
    <v-container>
      <form enctype="multipart/form-data" @submit="userConfirmUpdate($event)">
        <v-text-field
          v-model="name"
          type="text"
          label="Name"
          :rules="nameRules"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          v-model="email"
          type="text"
          label="Email"
          :rules="emailRules"
          hide-details="auto"
          class="mt-5"
        ></v-text-field>
        <v-select
        :items="items"
        :menu-props="{ top: true, offsetY: true }"
        label="Type" class="mt-5" v-model="type" @change="selectType()"
      ></v-select>
        <v-text-field
          v-model="phone"
          type="text"
          label="Phone"
          :rules="phoneRules"
          hide-details="auto"
          class="mt-5"
        ></v-text-field>
        <v-text-field
          v-model="address"
          type="text"
          label="Address"
          :rules="addressRules"
          hide-details="auto"
          class="mt-5"
        ></v-text-field>
        <v-text-field
          v-model="dob"
          type="date"
          label="Date of Birth"
          :rules="dobRules"
          hide-details="auto"
          class="mt-5"
        ></v-text-field>
       <input type="file" @change="onFileChange" class="mt-5" />
        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
        <v-card-text
          ><a href="/change_password">Change Password</a></v-card-text
        >
        <v-btn class="mr-4 mt-5"  color="success" type="submit">
          Confirm
        </v-btn>
        <v-btn @click="clear()" color="secondary" class="mt-5"> clear </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/user/user-update.js">
</script>
<style scoped src="../../assets/css/pages/user/user-update.css">
</style>
