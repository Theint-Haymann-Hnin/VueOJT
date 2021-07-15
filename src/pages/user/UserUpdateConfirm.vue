<template>
  <v-card class="card">
    <v-card-title> User Update Confirm </v-card-title>
    <v-container>
      <v-col md="2.5" xs4>Name : {{ this.$route.params.name }}</v-col>
      <v-col md="2.5" xs4>Email Address : {{ this.$route.params.email }}</v-col>
      <v-col md='2.5' xs4>Type : {{ this.$route.params.type == 1 ? 'User': 'Admin' }}</v-col>
      <v-col md="2.5" xs4>Phone : {{ this.$route.params.phone }} </v-col>
      <v-col md="2.5" xs4>Date of Birth : {{ this.$route.params.dob }}</v-col>
      <v-col md="2.5" xs4>Address : {{ this.$route.params.address }}</v-col>
    </v-container>
    <v-container>
      <form>
        <v-btn class="mr-4 mt-5" @click="updateUser()" color="success">
          Confirm
        </v-btn>
        <v-btn @click="clear()" color="secondary" class="mt-5"> clear </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/user/user-update-confirm.js">
</script>
<style scoped src="../../assets/css/pages/user/user-update-confirm.css">
</style>
