<template>
  <v-card class="card">
    <v-card-title> Post Update Confirm </v-card-title>
    <v-container>
      <form>
        <v-col md="2.5">Title : {{ this.$route.params.title }}</v-col>
        <v-col md="2.5"
          >Description : {{ this.$route.params.description }}</v-col
        >
        <v-col md="2.5">Status : {{ this.$route.params.status }}</v-col>
        <v-btn class="mr-4" color="success" @click="updatePost()">
          Confirm
        </v-btn>
        <v-btn color="secondary" @click="clear()"> Cancel </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/post-update-confirm.js">
</script>
<style scoped src="../../assets/css/pages/post/post-update-confirm.css">
</style>
