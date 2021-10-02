<template>
  <section>
    <div class="md:tw-flex">
        <div class="md:tw-w-3/12"></div>
      <div class="md:tw-w-6/12 tw-w-full">
        <section>
          <span class="tw-text-2xl tw-font-bold"> Update Assets </span>
        </section>
        <main class="tw-pt-6">
          <v-card>
            <v-form>
              <div>
                <v-text-field
                  dense
                  label="Asset name"
                  placeholder="Enter asset name..."
                  outlined
                ></v-text-field>

                <v-text-field
                  dense
                  label="Price"
                  placeholder="Enter the price..."
                  outlined
                ></v-text-field>

                <v-text-field
                  dense
                  label="Size"
                  placeholder="Enter the size..."
                  outlined
                ></v-text-field>

                <v-text-field
                  dense
                  label="Running Cost"
                  placeholder="Enter the running cost..."
                  outlined
                ></v-text-field>

                <v-text-field
                  dense
                  label="Output Per Square Meter"
                  placeholder="Enter the output per sqm..."
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
  }),
}
</script>
