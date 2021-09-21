<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn  v-bind="attrs" v-on="on"> <v-icon color="blue">mdi-email-box
          </v-icon></v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-card-title>Stay in Touch with Us</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field dense outlined label="Name"> </v-text-field>
            <v-text-field dense outlined label="Email Address"> </v-text-field>
            <v-textarea dense outlined label="Message"> </v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="blue" text @click="dialog.value = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
