<template>
  <section>
    <div class="md:tw-flex">
      <div class="md:tw-w-6/12 tw-w-full">  
        <section>
          <span class="tw-text-2xl tw-font-bold"> Create Model </span>
        </section>
        <main class="tw-pt-6">
          <v-form>
            <div>
              <v-text-field
                dense
                label="Model name"
                placeholder="Enter model name..."
                outlined
              ></v-text-field>

              <v-text-field
                dense
                label="Service Charge Value"
                placeholder="Enter the service charge value"
                outlined
              ></v-text-field>

              <v-autocomplete
                v-model="values"
                :items="items"
                placeholder="Choose Service Charge Type"
                dense
                label="Service Charge Type"
                outlined
              >
              </v-autocomplete>
              <v-autocomplete
                v-model="support_values"
                :items="support"
                placeholder="Choose Support for Co-ownership"
                dense
                label="Support for Co-ownership"
                outlined
              >
              </v-autocomplete>
              <v-autocomplete
                v-model="manage_values"
                :items="manage"
                placeholder="Who will manage this Model"
                dense
                label="Manager"
                outlined
              >
              </v-autocomplete>
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
  }),
}
</script>

<style></style>
