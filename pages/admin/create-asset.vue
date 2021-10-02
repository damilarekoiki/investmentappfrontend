<template>
  <section>
    <div class="md:tw-flex">
      <div class="md:tw-w-6/12 tw-w-full">  
        <section>
          <span class="tw-text-2xl tw-font-bold"> Create Asset </span>
        </section>
        <main class="tw-pt-6">
          <v-form ref="form" @submit.prevent="createAsset">
            <div>
              <v-text-field
                dense
                label="Asset name"
                placeholder="Enter asset name..."
                outlined v-model="name"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>

              <MoneyInput :outlined="true" :clearable="true" :dense="true"
                label="Price"
                placeholder="Enter the price..."
                v-model="price"
                  :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              />

              <v-text-field
                dense
                label="Size"
                placeholder="Enter the size..."
                outlined v-model="size"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>

              <MoneyInput :outlined="true" :clearable="true" :dense="true" v-model="runningCost"
                label="Running Cost"
                placeholder="Enter the running cost..."
                  :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              />

              <v-text-field
                dense
                label="Output Per Square Meter"
                placeholder="Enter the output per sqm..."
                outlined v-model="outputPerSquareMeter"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>

              <MoneyInput :outlined="true" :clearable="true" :dense="true" v-model="offtakePrice"
                label="Off Take Price"
                placeholder="Enter the off take price..."
                  :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              />


              <v-autocomplete
                placeholder="Choose model"
                dense
                label="Model"
                outlined
                v-model="selectedModels"
                :items="models"
                multiple
                no-data-text="Select or add new"
                item-text="model_name" item-value="unique_id"
                :rules="[
                    (v) => !!v || 'This field is required',
                    (v) => selectedModels.length > 0 || 'Please select a model'
                ]"
                return-object
              >
              </v-autocomplete>
              <v-text-field
                dense
                label="Minimum Ownership per Square Meter"
                placeholder="Enter the minimum ownership per square meter..."
                outlined
                v-model="minimumOwnershipPerSquareMeter"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>
              <v-text-field
                dense
                label="Increamental Rate"
                placeholder="Enter the increamental rate..."
                outlined
                v-model="incrementalRate"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>
              <v-text-field
                dense
                label="Description"
                placeholder="Enter the description..."
                outlined
                v-model="description"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>
              <v-text-field
                dense
                label="Procurement Period"
                placeholder="Enter the procurement period..."
                outlined
                v-model="procurementPeriod"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>
              <v-text-field
                dense
                label="Life Span"
                placeholder="Enter the life span..."
                outlined
                v-model="lifeSpan"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>
              <v-text-field
                dense
                label="Cycle length"
                placeholder="Enter the cycle length..."
                outlined
                v-model="cycleLength"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>
              <v-autocomplete
                v-model="purchaseType"
                :items="purchaseTypes"
                placeholder="Full  or part"
                dense
                label="Purchase Type"
                outlined
                item-text="name" item-value="id"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              >
              </v-autocomplete>
              <v-text-field v-if="purchaseType === 0"
                dense
                label="Partner"
                placeholder="Enter the partner..."
                outlined v-model="partner"
                :error-messages="partnerErrorMessage"
                :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-text-field>

              <v-file-input
                  label="Asset Image"
                  prepend-icon="mdi-image"
                  dense
                  @change="onAssetImageChange"
                  :rules="[
                      (v) => !!v || 'This field is required'
                  ]"
              ></v-file-input>
              <v-btn color="primary" type="submit" :loading="submitting"> Submit </v-btn>
            </div>
          </v-form>
        </main>
      </div>
      <div class="md:tw-w-6/12 tw-w-full">
        <main class="tw-pt-6 md:tw-px-16 tw-px-1 tw-flex md:tw-flex-col tw-flex-col-reverse">
          <div>
            <RecentAssets />
          </div>
          <div class="md:tw-pt-40 tw-pt-6">
            <ImageEl :src="imagePreviewURL" height="200" v-if="imagePreviewURL" />
          </div>
        </main>
      </div>
    </div>

    <NotificationModal :open="openModal" :headerText="modalHeaderText" :contentText="modalContentText"
    :okText="modalOkText" :cancelText="modalCancelText" :icon="modalIcon"
    :showCancelButton="showModalCancelButton" />

  </section>
</template>

<script>
import axios from "axios";
import ImageEl from "@/components/ImageEl";
import RecentAssets from "@/components/RecentAssets"
import NotificationModal from "@/components/Modal/Notification"
export default {
  layout: 'dashboardadmin',
  components: {
    ImageEl,
    RecentAssets,
    NotificationModal
  },
  async asyncData({app}){
    let store = app.store;
    let url = store.state.apiStore.admin.fetchModels
    let response = await axios.get(url);
    let data = response.data;
    let models = data.data;
    return {models}
  },
  data: () => ({

    openModal: false,
    showModalCancelButton: false,
    modalHeaderText: '',
    modalContentText: '',
    modalOkText: '',
    modalCancelText: '',
    modalIcon: 'success',
    
    purchaseTypes: [
      {
        id: 1,
        name: 'Full Purchase'
      },
      {
        id: 0,
        name: 'Part Purchase'
      }
    ],
    imagePreviewURL: '',

    name: '',
    price: '',
    size: '',
    runningCost: '',
    outputPerSquareMeter: '',
    offtakePrice: '',
    selectedModels: [],
    minimumOwnershipPerSquareMeter: '',
    description: '',
    procurementPeriod: '',
    lifeSpan: '',
    cycleLength: '',
    purchaseType: '',
    partner: '',
    incrementalRate: '',
    assetImage: '',

    submitting: false
  }),
  methods:{
    createAsset(){
      if(!this.$refs.form.validate()) return ;
      if(this.submitting) return;
      this.submitting = true
      let url = this.$store.state.apiStore.admin.addAsset

      this.selectedModels = this.selectedModels.map(({unique_id}) => unique_id);
      this.purchaseType = this.purchaseType

      let formData = new FormData();
      formData.append('asset_name', this.name)
      formData.append('price', this.price)
      formData.append('size', this.size)
      formData.append('running_cost', this.runningCost)
      formData.append('output_per_square_meter', this.outputPerSquareMeter)
      formData.append("off_take_price", this.offtakePrice);
      formData.append("models", this.selectedModels.join());
      formData.append("min_ownership_per_square_meter", this.minimumOwnershipPerSquareMeter);
      formData.append("incremental_rate", this.incrementalRate);
      formData.append("description", this.description);
      formData.append("procurement_period", this.procurementPeriod);
      formData.append("life_span", this.lifeSpan);
      formData.append("cycle_length", this.cycleLength);
      formData.append("full_or_part_purchase", this.purchaseType);
      formData.append("partner_if_part", this.partner);
      formData.append("image", this.assetImage);

      axios.post(url, formData, {
          headers: {
              'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)
          },
      }).then((response) => {
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
        console.log(error);
      })
      
    },
    onAssetImageChange(event) {

      // const file = event.target.files[0]; // use it in case of normal HTML input
      const file = event; // in case vuetify file input
      if (file) {
          this.imagePreviewURL = URL.createObjectURL(file);
          URL.revokeObjectURL(file); // free memory
      }
      this.assetImage = file
      },
  },
  computed: {
    partnerErrorMessage(){
      if(this.purchaseType === 0 && this.partner==""){
        return "Enter a partner"
      }
      return '';
    }
  },
  watch: {
    selectedModels(val){
      let d= val.map((e) => e)
      console.log(d);
    },
    purchaseType(val){
      console.log(val);
    }
  }
}
</script>