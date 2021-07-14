<template>
  <v-card class="card">
    <v-card-title>
      User list
      <!-- <v-spacer></v-spacer> -->
    </v-card-title>
    <v-form ref="form">
      <v-row class="filter-bar">
        <v-col md="2.5">
          <v-text-field
            label="Name"
            v-model="name"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col md="2.5">
          <v-text-field
            label="Email"
            v-model="email"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col md="2.5">
          <v-text-field
            label="Created From"
            v-model="createFrom"
            type="date" 
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col md="2.5">
          <v-text-field
            label="Created To"
            v-model="createTo"
            type="date" 
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <!-- <v-col md="2.5">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="createFrom"
                label="Created From"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col> -->
        <!-- <v-col md="2.5">
          <v-menu
            ref="menu1"
            v-model="createTo"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="Created To"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col> -->
        <v-btn class="post-list-btn mr-4" color="primary" @click="findUser()">
          <v-icon left> search </v-icon>
          Search</v-btn
        >

        <v-btn class="post-list-btn mr-4" color="primary" @click="userCreate()">
          <v-icon left> add </v-icon>Add</v-btn
        >
      </v-row>
    </v-form>

    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.name`]="{ item }">
          <a v-if="item.name">{{ item.name }}</a>
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          <v-card-text v-if="item.created_at" >{{ format(item.created_at) }}</v-card-text>
        </template>
        <template v-slot:[`item.updated_at`]="{ item }">
          <v-card-text v-if="item.updated_at" >{{ format(item.updated_at) }}</v-card-text>
        </template>
        <template v-slot:[`item.operation`]="{ item }">
          <v-row>
            <div class="operation-btn">
              <v-btn color="primary" class="post-list-btn" @click="update(item)"
                >Edit</v-btn
              >
            </div>
            <div class="operation-btn">
              <v-btn
                color="error"
                class="post-list-btn"
                @click="deleteUser(item)"
                >Delete</v-btn
              >
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/user/user-list.js">
</script>

<style scoped src="../../assets/css/pages/user/user-list.css">
</style>

