<template>
  <v-card class="card">
    <v-card-title> Upload Post </v-card-title>
    <v-container>
      <form id="importForm">
        <v-text-field
          type="file"
          label="Browse"
          class="mt-5"
          name="import_file"
        ></v-text-field>
        <v-btn color="primary" class="mt-5" @click="importExcel()">
          Import File
        </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/upload-post.js">
</script>
<style scoped src="../../assets/css/pages/post/upload-post.css">
</style>
