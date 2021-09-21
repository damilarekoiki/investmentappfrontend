<template>
  <v-card>
    <v-card-title class="text-h5">
      Confirm Delete
    </v-card-title>
    <v-card-text
      >Deleted item cannot be recovered.</v-card-text
    >
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue" text @click="dialog = false">
        Cancel
      </v-btn>
      <v-btn color="red" text @click="dialog = false"> Confirm </v-btn>
    </v-card-actions>
  </v-card>
</template>
