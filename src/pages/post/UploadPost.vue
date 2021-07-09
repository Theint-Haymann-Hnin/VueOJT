<template>
<v-card class="card">
    <v-card-title>
       Upload Post
    </v-card-title>
    <v-container>
       <form action="">
     <v-text-field v-model="password" type="file" 
      label="Browse" 
      hide-details="auto" class="mt-5"></v-text-field>
      
      <v-btn color="primary" class="mt-5">
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



