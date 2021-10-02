<template>
    <div class="md:tw-flex md:tw-pt-10">
        
            <div class="md:tw-flex md:tw-justify-between tw-p-4">
                <div class="md:tw-w-6/12 md:tw-block tw-hidden">
                    <div>
                        <span class="tw-text-3xl tw-font-bold">
                            Used by thousands of traders and business owners
                        </span>
                    </div>
                    <div class="tw-flex tw-pt-4">
                        <div class="tw-w-6/12">
                            <img src="/img/market-farm.jpg" alt="">
                        </div>
                        <div class="tw-w-6/12 tw-pl-2 tw-pt-16">
                            <img src="/img/market-ladies.jpg" alt="">
                        </div>
                    </div>
                </div>
                
                <div class="md:tw-w-4/12 tw-w-full md:tw-px-0 tw-px-2">
                    <v-card class="tw-py-6 tw-px-6 rounded-lg" rounded elevation="15">
                        <div class="tw-flex tw-flex-col">
                            <div class="tw-font-bold tw-text-3xl tw-text-green-800">
                                Login
                            </div>
                            <div>
                                <span class="tw-text-gray-600">Do not have an account?</span> <NuxtLink to="/signup">
                                    <span class="tw-text-green-600">Register</span>
                                </NuxtLink>
                            </div>
                        </div>
                        <v-form autocomplete="off" ref="form">
                            <div class="md:tw-mt-5">
                                
                                <v-text-field
                                    label="Email or phone number"
                                    placeholder="Email or phone number"
                                    outlined dense
                                ></v-text-field>
                                <div class="tw-flex tw-justify-end">
                                    <NuxtLink to="/forgot-password">
                                        <span class=" tw-text-sm tw-text-green-600">Forgot password?</span>
                                    </NuxtLink>
                                </div>
                                <v-text-field
                                    label="Password"
                                    placeholder="Password"
                                    type="password"
                                    outlined dense
                                ></v-text-field>
                                <v-btn color="primary">
                                    Login
                                </v-btn>
                            </div>
                        </v-form>
                    </v-card>
                </div>
                
            </div>
    <div>
        <ContactUs />
    </div>
        
    </div>
</template>

<script>
import ContactUs from '@/components/ContactUs'
export default {
    components: {
        ContactUs
    },
    data() {
        return {
            email: '',
            password: '',
            error: {
                email: '',
                password: '',
            },
            
            isSubmitting: false,
            errorMessage: '',
        }
    },
    auth: {
        login: false,
    },
    methods: {
        async login(){
            if(!this.$refs.form.validate()) return ;
            if(this.isSubmitting) return;
            this.isSubmitting = true
            let userDetails = {email: this.email, password: this.password};
            try {

                let response = await this.$auth.loginWith('localAdmin', { data: userDetails });
                let data = await response.data;

                console.log(data);

                this.isSubmitting = false;

                if(data.status){
                    if(data.status == 'error'){
                        this.errorMessage = data.message
                        return ;
                    }
                }

                if(this.$auth.loggedIn){
                    setTimeout(() => {
                        this.$router.push('/admin');
                    }, 50);
                }

            } catch (error) {
            }
        }
    },
    watch: {
        email(val){
            this.errorMessage = ""
        },
        password(val){
            this.errorMessage = ""
        }
    },
    computed: {
        buttonDisability(){
            return !(this.email && /.+@.+\..+/.test(this.email)  && !this.isSubmitting)
        }
    },
    }
</script>

<style>

</style>