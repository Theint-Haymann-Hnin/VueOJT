<template>
  <v-card class="card">
    <v-card-title> User Create Confirm </v-card-title>
    <v-container>
      <form  enctype="multipart/form-data">
        <v-col md="2.5">Name : {{ this.$route.params.name }}</v-col>
        <v-col md="2.5">Email Address :{{ this.$route.params.email }}</v-col>
        <v-col md="2.5">Password :{{ this.$route.params.password }}</v-col>
        <v-col md="2.5">Type : {{ this.$route.params.type == 1 ? 'User': 'Admin' }}</v-col>
        <v-col md="2.5">Phone : {{ this.$route.params.phone }} </v-col>
        <v-col md="2.5">Date of Birth : {{ this.$route.params.dob }}</v-col>
        <v-col md="2.5">Address : {{ this.$route.params.address }}</v-col>
         <v-col md="2.5">Profile : {{ this.$route.params.image.name }}</v-col>
        <v-btn class="mr-4 mt-5" @click="store()" color="success">
          Confirm
        </v-btn>
        <v-btn @click="clear()" color="secondary" class="mt-5"> clear </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/user/user-create-confirm.js">
</script>
<style scoped src="../../assets/css/pages/user/user-create-confirm.css">
</style>
