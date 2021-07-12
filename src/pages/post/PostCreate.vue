<template>
<v-card class="card">
    <v-card-title>
        Post Create
    </v-card-title>
    <v-container>
       <form>
      <v-text-field
        v-model="title"
        clearable
        clear-icon="mdi-close-circle"
        :counter="10"
        label="Title"
        required :rules="titleRules"
      ></v-text-field>
       <v-textarea
        v-model="description"
        clearable
        clear-icon="mdi-close-circle"
        label="Description"
        value="" :rules="descriptionRules"
      ></v-textarea>
  
      <v-btn
        class="mr-4 mt-5"
      color="success" @click="confirmPage"
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

<script src="../../services/post/post-create.js">
</script>

<style scoped src="../../assets/css/pages/post/post-create.css">
</style>

