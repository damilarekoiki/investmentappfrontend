<template>
  <section>
    <div class="md:tw-flex">
      <div class="md:tw-w-6/12 tw-w-full">
        <section>
          <span class="tw-text-2xl tw-font-bold"> Create User </span>
        </section>
        <main class="tw-pt-6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <div>
              <v-text-field
                dense
                label="First Name"
                placeholder="Enter first name..."
                outlined
                :rules="[
                  (v)  => !!v || 'This field is required'
                ]"
              ></v-text-field>

              <v-text-field
                dense
                label="Last Name"
                placeholder="Enter last name..."
                outlined
              ></v-text-field>

              <v-text-field
                dense
                label="Other Name"
                placeholder="Enter other name..."
                outlined
              ></v-text-field>

              <v-text-field
                dense
                label="Email"
                placeholder="Enter email..."
                outlined
              ></v-text-field>

              <v-autocomplete
                v-model="state_values"
                :items="state"
                placeholder="Choose state"
                dense
                label="State"
                outlined
              >
              </v-autocomplete>

              <v-autocomplete
                v-model="lga_values"
                :items="lga"
                placeholder="Choose local government area"
                dense
                label="Local Government Area"
                outlined
              >
              </v-autocomplete>

              <v-text-field
                dense
                label="Personal  Account Number"
                placeholder="Enter personal numner.."
                outlined
              ></v-text-field>

              <v-text-field
                dense
                label="Off Take Price"
                placeholder="Enter the off take price..."
                outlined
              ></v-text-field>

              <v-autocomplete
                v-model="values"
                :items="items"
                placeholder="Choose model"
                dense
                label="Model"
                outlined
              >
              </v-autocomplete>
              <v-text-field
                dense
                label="Minimum Ownership per Square Meter"
                placeholder="Enter the minimum ownership per square meter..."
                outlined
              ></v-text-field>
              <v-text-field
                dense
                label="Increamental Rate"
                placeholder="Enter the increamental rate..."
                outlined
              ></v-text-field>
              <v-text-field
                dense
                label="Description"
                placeholder="Enter the description..."
                outlined
              ></v-text-field>
              <v-text-field
                dense
                label="Procurement Period"
                placeholder="Enter the procurement period..."
                outlined
              ></v-text-field>
              <v-text-field
                dense
                label="Life Span"
                placeholder="Enter the life span..."
                outlined
              ></v-text-field>
              <v-text-field
                dense
                label="Cycle length"
                placeholder="Enter the cycle length..."
                outlined
              ></v-text-field>
              <v-autocomplete
                v-model="purchase_values"
                :items="purchase"
                placeholder="Full  or part"
                dense
                label="Purchase Type"
                outlined
              >
              </v-autocomplete>
              <v-text-field
                dense
                label="Partner"
                placeholder="Enter the partner..."
                outlined
              ></v-text-field>
              <v-btn color="primary"> Submit </v-btn>
            </div>
          </v-form>
        </main>
      </div>
      <div class="md:tw-w-6/12 tw-w-full">
        <main class="tw-pt-6 md:tw-px-16 tw-px-1">
          <v-card color="white" elevation="2" outlined>
            <v-card-title>Recents models</v-card-title>

            <v-card-text>
              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-4/12">Saki Model</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-green-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Saki Model</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Saki Model</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>
              <div
                class="
                  tw-flex
                  tw-bg-green-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Saki Model</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Saki Model</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>
              <div
                class="
                  tw-flex
                  tw-bg-green-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Saki Model</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Saki Model</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>
              <div
                class="
                  tw-flex
                  tw-bg-green-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Saki Model</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Saki Model</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>
            </v-card-text>
          </v-card>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'dashboardadmin',
  data: () => ({
    items: ['Fixed per square meter', 'Profit sharing using Percentage'],
    values: [1, 2],
    value: null,
    support: ['Allow support', 'Do not allow support'],
    support_values: [1, 2],
    manage: ['Farmkonnect', 'Not Farmkonnect'],
    manage_values: [1, 2],
    purchase: ['Full Purchase', 'Part Purchase'],
    purchase_values: [1, 2],
    state: ['Lagos', 'Osun', 'Oyo'],
    state_value: [1, 2],
    lga: ['Ibadan-north', 'Ife', 'Lekki'],
    lga_value: [1, 2, 3],
  }),
}
</script>
