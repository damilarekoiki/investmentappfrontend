<template>
  <section>
    <div class="md:tw-flex">
      <div class="md:tw-w-6/12 tw-w-full">  
        <section>
          <span class="tw-text-2xl tw-font-bold"> Create Model </span>
        </section>
        <main class="tw-pt-6">
          <v-form ref="form" @submit.prevent="createModel">
            <div>
              <v-text-field
                dense
                label="Model name"
                placeholder="Enter model name..."
                outlined
                v-model="name"
              ></v-text-field>

              <v-autocomplete
                v-model="selectedServiceChargeType"  
                :items="serviceChargeTypes"
                placeholder="Choose Service Charge Type"
                dense
                label="Service Charge Type"
                outlined
                item-text="name" item-value="id"
              >
              </v-autocomplete>

              <v-text-field
                dense
                label="Service Charge Value"
                placeholder="Enter the service charge value"
                outlined v-model="serviceChargeValue"
              ></v-text-field>

              
              <v-autocomplete
                v-model="selectedSupport"
                :items="supports"
                placeholder="Choose Support for Co-ownership"
                dense
                label="Support for Co-ownership"
                outlined
                item-text="name" item-value="id"
              >
              </v-autocomplete>
              <v-autocomplete
                v-model="selectedManager"
                :items="managers"
                placeholder="Who will manage this Model"
                dense
                label="Manager"
                outlined
                item-text="name" item-value="id"
              >
              </v-autocomplete>
              <v-btn color="primary" type="submit" :loading="submitting"> Submit </v-btn>
            </div>
          </v-form>
        </main>
      </div>
      <div class="md:tw-w-6/12 tw-w-full">
        <main class="tw-pt-6 md:tw-px-16 tw-px-1">
          <RecentModels />
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import RecentModels from "@/components/RecentModels";
export default {
  layout: 'dashboardadmin',
  components: {
    RecentModels
  },
  data: () => ({
    submitting: false,
    name: '',
    serviceChargeValue: '',
    serviceChargeTypes: [
      {id: 1, name: 'Fixed per square meter'},
      {id: 0, name: 'Profit sharing using Percentage'}
    ],
    selectedServiceChargeType: '',
    supports: [{id: 1, name: 'Allow support'}, {id: 0, name: 'Do not allow support'}],
    selectedSupport: '',
    managers: [{id: 1, name: 'Farmkonnect'}, {id: 0, name: 'Not Farmkonnect'}],
    selectedManager: ''
  }),
  methods: {
    createModel(){

      if(!this.$refs.form.validate()) return ;
      if(this.submitting) return;
      this.submitting = true
      let url = this.$store.state.apiStore.admin.addModel
      let support = this.selectedSupport.id;
      let manager = this.selectedManager.id;
      let serviceChargeType = this.selectedServiceChargeType.id;

      let model = {
        name: this.name,
        service_charge_type: serviceChargeType,
        service_charge_value: this.serviceChargeValue,
        support_for_co_ownership: support,
        who_manages: manager
      }
      this.$axios.post(url, model).then((response) => {
        this.submitting = false
        console.log(response);
        const data = response.data;
        const status = data.status;
        
        this.openModal = true;
        this.modalContentText = data.message;

        if(status == 'success'){

            this.modalIcon = 'success';
            this.modalHeaderText = 'Successs';

            setTimeout(() => {
                this.$router.push(`/admin/all-models`);
            }, 3000);

        }else{

            this.modalIcon = 'error';
            this.modalHeaderText = 'Error';

        }
      }).catch((error) => {
        this.submitting = false
      })
    }
  }
}
</script>

