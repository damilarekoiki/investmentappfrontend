<template>
    <div class="text-center" >

        <v-dialog
            v-model="open"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >

            <v-card>

                <section>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="$emit('close')">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>
                        <span>Add To Cart </span>
                    </v-toolbar-title>
                </v-toolbar>

                <v-list
                    three-line
                    subheader
                >

                    <v-subheader></v-subheader>

                    <!-- Card payment -->
                    <v-list-item>
                        <!-- <v-list-item-content> -->
                        <div class="tw-flex tw-justify-between tw-w-full">
                            <div class="tw-w-4/12">
                                <article class="tw-shadow-lg  tw-rounded-xl tw-py-4">
                                    <div class="tw-flex tw-justify-center">
                                        <img :src="image" alt="" style="width:80%">
                                    </div>
                                    
                                    <div class="tw-flex tw-justify-center tw-pt-4 tw-font-bold tw-text-xl">
                                        {{name}}
                                    </div>

                                    <div class="tw-text-xs tw-flex tw-justify-center tw-pt-2">
                                        ({{`${size} ${measurement}`}})
                                    </div>

                                    <div class="tw-text-xs tw-flex tw-justify-center tw-pt-2">
                                        {{amount | nairaFormat}}
                                    </div>                          
                                    
                                </article>
                            </div>
                            <div class="tw-w-8/12 tw-pt-24">
                                <div class="tw-flex tw-justify-center">
                                    <div class="tw-w-5/12">
                                        <!-- <v-text-field ref="quantity" v-model="quantity" outlined
                                            :rules="[
                                                (v) => v > 0 || 'Quantity should be greater than zero',
                                            ]"
                                            label="Quantity" placeholder="Enter Quantity" required
                                            :append-outer-icon="'mdi-plus'"
                                            :prepend-icon="quantity > 1 ? 'mdi-minus' : ''"
                                            @click:append-outer="quantity++"
                                            @click:prepend="quantity--"
                                            readonly
                                        ></v-text-field> -->

                                        <v-text-field ref="quantity" v-model="quantity" outlined
                                            :rules="[
                                                (v) => v > 0 || 'Quantity should be greater than zero',
                                            ]"
                                            label="Quantity" placeholder="Enter Quantity"
                                            type="number"
                                        ></v-text-field>
                                    </div>
                                </div>
                                <div class="tw-flex tw-justify-center">
                                    <div class="tw-w-5/12">
                                        <v-btn color="primary" dark elevation="2" @click="addProduct">
                                            Add to cart
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- </v-list-item-content> -->
                    </v-list-item>
                    
                </v-list>

                </section>
                
            </v-card>
        </v-dialog>


        <NotificationModal :open="openModal" :headerText="modalHeaderText" :contentText="modalContentText"
        :okText="modalOkText" :cancelText="modalCancelText" :icon="modalIcon"
        :showCancelButton="showModalCancelButton" />

    </div>
</template>

<script>
    // import { mapMutations } from 'vuex';
    // import FlutterwavePayment from "@/components/Flutterwave/Payment"
    import NotificationModal from "@/components/Modal/Notification"
    export default {
        props: ['open', 'name', 'category', 'size', 'measurement', 'amount', 'itemId', 'image'],
        components: {
            // FlutterwavePayment,
            NotificationModal,
        },
        data () {
            return {

                cardPayment: true,
                walletDebit: false,

                closeFlutterwaveModal: false,

                cardPaymentAmount: 0.00,
                walletDebitAmount: 0.00,

                showCloseSnackbar: false,
                snackbarContent: '',
                snackbar: false,
                isSubmitting: false,

                openModal: false,
                showModalCancelButton: false,
                modalHeaderText: '',
                modalContentText: '',
                modalOkText: '',
                modalCancelText: '',
                modalIcon: '',

                quantity: 1,

            }
        },
        methods: {
            addProduct(){
                let products = [];
                if(localStorage.getItem('products')){
                    products = JSON.parse(localStorage.getItem('products'));
                }
                products.push(
                    {
                        itemId : this.itemId,
                        image : this.image,
                        name: this.name,
                        quantity: this.quantity,
                        amount: this.amount,
                        size: this.size,
                        measurement: this.measurement
                    }
                );
                localStorage.setItem('products', JSON.stringify(products));

                this.openModal = true;
                this.modalContentText = 'Product added to cart successfully';
                this.modalIcon = 'success';
                this.modalHeaderText = 'Successs';

                setTimeout(() => {
                    this.$router.push('/cart');
                }, 2000);
                
            }
        },
        computed: {

        },
        watch: {
            // cardPaymentAmount(val){
            //     if(val > this.referralAmountRemaining){
            //         let referralAmountRemaining = this.referralAmountRemaining;
            //         setTimeout(() => {
            //             this.cardPaymentAmount = referralAmountRemaining;
            //         }, 50);
            //     }
            // },
            // walletDebitAmount(val){
            //     if(val > this.referralAmountRemaining){
            //         let referralAmountRemaining = this.referralAmountRemaining;
            //         setTimeout(() => {
            //             this.walletDebitAmount = referralAmountRemaining;
            //         }, 50);
            //     }
            // },
        },
        created(){
            // this.cardPaymentAmount = this.referralAmountRemaining;
            // this.walletDebitAmount = this.referralAmountRemaining;
        }
    }
</script>

<style scoped>
    .v-btn {
        font-weight: bold;
        font-size: 0.975rem;
    }
</style>