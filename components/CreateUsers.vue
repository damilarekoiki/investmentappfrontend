<template>
  <v-form ref="form" lazy-validation>
    <div>
      <v-text-field
        dense
        label="First Name"
        placeholder="Enter first name..."
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      ></v-text-field>

      <v-text-field
        dense
        label="Last Name"
        placeholder="Enter last name..."
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      ></v-text-field>

      <v-text-field
        dense
        label="Other Name"
        placeholder="Enter other name..."
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      ></v-text-field>

      <v-text-field
        dense
        label="Email"
        placeholder="Enter email..."
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      ></v-text-field>

      <v-autocomplete
        v-model="state_value"
        :items="state"
        placeholder="Choose state"
        dense
        label="State"
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      >
      </v-autocomplete>

      <v-autocomplete
        v-model="lga_value"
        :items="lga"
        placeholder="Choose local government area"
        dense
        label="Local Government Area"
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      >
      </v-autocomplete>

      <v-text-field
        dense
        label="Personal  Account Number"
        placeholder="Enter personal numner.."
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      ></v-text-field>

      <v-text-field
        dense
        label="Address"
        placeholder="Enter address..."
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      ></v-text-field>

      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Date of Birth"
            placeholder="Enter Date of Birth"
            readonly
            v-bind="attrs"
            v-on="on"
            dense
            outlined
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>

      <v-text-field
        dense
        outlined
        label="Phone number"
        placeholder="Enter phone number"
        :rules="[(v) => !!v || 'This field is required']"
      >
      </v-text-field>
      <v-text-field
        dense
        label="Image URl"
        placeholder="Enter Image url..."
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      ></v-text-field>

      <v-autocomplete
        v-model="gender_values"
        :items="gender"
        placeholder="Choose Gender"
        dense
        label="Gender"
        outlined
        :rules="[(v) => !!v || 'This field is required']"
      >
      </v-autocomplete>
      <v-text-field
        dense
        outlined
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[
          (v) => !!v || 'This field is required',
          (v) =>
            /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#\$%\^&\])(?=.[a-zA-Z]).{8,}$/.test(
              v
            ) ||
            'Weak. Hint: Must be 8 characters, contains 1 uppercase, 1 lowercase and one special character',
        ]"
        :type="show ? 'text' : 'password'"
        name="input-10-2"
        label="Password"
        hint="At least 8 characters"
        placeholder="Enter password"
        class="input-group--focused"
        @click:append="show = !show"
      ></v-text-field>

      <v-btn color="primary"> Submit </v-btn>
    </div>
  </v-form>
</template>
