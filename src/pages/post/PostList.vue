<template>
<v-card class="card">
    <v-card-title>
        Post list
        <v-spacer></v-spacer>
        <v-form ref="form">
            <v-row class="filter-bar">
                <v-col md="2.5">
                    <v-text-field label="Search keyword" hide-details="auto"  prepend-icon="mdi-magnify"></v-text-field>
                </v-col>
                <v-btn class="post-list-btn mr-4" color="primary">Search</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary" @click="postCreate()">
                    <v-icon left>
                    add
                    </v-icon>Create</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">
                    <v-icon left>
                    fas fa-lock
                    </v-icon>Upload</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">
                     <v-icon left>
                    download
                    </v-icon>Download</v-btn>
            </v-row>
        </v-form>
    </v-card-title>
    <v-container>
        <v-data-table :headers="headers" :items="showList">
            <template v-slot:[`item.title`]="{ item }">
                <a v-if="item.title">{{item.title}}</a>
            </template>
            <template v-slot:[`item.operation`]="{ item }">
                <v-row>
                    <div class="operation-btn">
                        <v-btn color="success" class="post-list-btn" @click="update(item)">
                       <v-icon left>
                    edit
                    </v-icon> Edit</v-btn>
                    </div>
                    <div class="operation-btn">
                        <v-btn color="error" class="post-list-btn" @click="deletePost(item)" >
                            <v-icon left>
                    delete
                    </v-icon>Delete</v-btn>
                    </div>
                </v-row>
            </template>
        </v-data-table>
    </v-container>
</v-card>
</template>

<script src="../../services/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
