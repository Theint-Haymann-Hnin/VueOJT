<template>
<v-card class="card">
    <v-card-title>
        Post Update 
    </v-card-title>
    <v-container>
       <form>
      <v-text-field
        v-model="title"
        clearable
        clear-icon="mdi-close-circle"
        :counter="10"
        label="Title" :rules="titleRules"
        required
      ></v-text-field>
       <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        label="Description"
        value="" :rules="descriptionRules"
      ></v-textarea>
        <v-checkbox
        v-model="checkbox" label="status"
      ></v-checkbox>
      <v-btn
        class="mr-4"
       @click="postUpdate()" color="success"
      >
        Confirm
      </v-btn>
      <v-btn @click="clear()" color="secondary">
        Clear
      </v-btn>
    </form>
    </v-container>
</v-card>
</template>

<script src="../../services/post/post-update.js">
</script>

<style scoped src="../../assets/css/pages/post/post-update.css">
</style>



