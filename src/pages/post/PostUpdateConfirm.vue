<template>
<v-card class="card">
    <v-card-title>
        Post Update  Confirm
    </v-card-title>
    <v-container>
       <form>
          <v-col md='2.5'>Title : {{this.$route.params.title}}</v-col>
          <v-col md='2.5'>Description : {{this.$route.params.description}}</v-col>
           <v-col md='2.5'>Status : {{this.$route.params.status}}</v-col>
      <!-- <v-text-field
        v-model="title"
        clearable
        clear-icon="mdi-close-circle"
        :counter="10"
        label="Title"
        required
      ></v-text-field>
       <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        label="Description"
        value=""
      ></v-textarea>
        <v-checkbox
        v-model="checkbox" label="status"
      ></v-checkbox> -->
      <v-btn
        class="mr-4"
        color="success" @click="updatePost(1)"
      >
        Confirm
      </v-btn>
      <v-btn color="secondary"  @click="clear()">
        Cancel
      </v-btn>
    </form>
    </v-container>
</v-card>
</template>

<script src="../../services/post/post-update-confirm.js">
</script>

<style scoped src="../../assets/css/pages/post/post-update-confirm.css">
</style>





