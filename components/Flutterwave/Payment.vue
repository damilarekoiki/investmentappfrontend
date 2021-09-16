<template>
    <v-btn @click="payWithFlutterwave" color="primary" :disabled="disabled">
        {{buttonText}}
    </v-btn>
</template>

<script>
    export default {
        name: 'FlutterwavePayment',
        props: {
            amount: Number,
            currency: String,
            buttonText: String,
            email: String,
            name: String,
            country: String,
            disabled: {
                type: Boolean,
                default: false
            },
            username: String,
            closeModal: {
                type: Boolean,
                default: false
            }

        },
        head() {
            return {
                script: [
                    {src: 'https://checkout.flutterwave.com/v3.js', hid: 'flutterwave'}
                ]
            }
        },
        data(){
            return {
                paymentGateway: 'flutterwave',
                flutterwave: {},
            }
        },
        methods: {
            payWithFlutterwave() {

                var publickKey = this.$config.myApp.flutterwavePublicKey;
                var amount = this.amount;
                var currency = this.currency;
                var email = this.email;
                var name = this.name;
                var country = this.country;
                let username = this.username;
                let timestamp = new Date().getTime();
                let str = Buffer.from(username).toString('base64');
                str = str.replace(/[^a-zA-Z0-9]/g, "")

                var reference = '' + Math.floor((Math.random() * 1000000000) + 1) + email.length + str + timestamp;

                var vueApp = this;
                var paymentGateway = this.paymentGateway

                var vueApp = this;

                this.flutterwave = FlutterwaveCheckout({
                    public_key: publickKey,
                    tx_ref: reference,
                    amount: amount,
                    currency: currency,
                    country: country,
                    payment_options: " ",
                    // meta: {
                    //     consumer_id: 23,
                    //     consumer_mac: "92a3-912ba-1192a",
                    // },
                    customer: {
                        email: email,
                        phone_number: "",
                        name: name,
                    },
                    callback: function (data) {
                        var reference = data.transaction_id;
                        let paymentReference = reference;

                        let payment_reference = paymentReference
                        let payment_gateway = paymentGateway
                        vueApp.$emit('paymentCallbackFlutterwave',
                            {payment_reference, payment_gateway}
                        )
                    },
                    onclose: function() {
                        // close modal
                    },
                    customizations: {
                        title: "7Digits",
                        description: "Registration payment",
                        logo: "http://localhost:3000/img/logo.png",
                    },
                });
            }
        },
        watch: {
            closeModal(val){
                if(val){
                    this.flutterwave.close();
                }
            },
        },
        created(){
            
        }
    }
</script>

<style>

</style>