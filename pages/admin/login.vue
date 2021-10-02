<template>
    <div class="md:tw-flex tw-justify-center md:tw-pt-10">
        
        <div class="tw-w-6/12 md:tw-px-0 tw-px-2">
            <v-card class="tw-py-6 tw-px-6 rounded-lg" rounded elevation="15">
                <div class="tw-flex tw-flex-col">
                    <div class="tw-font-bold tw-text-3xl tw-text-green-800">
                        Admin Login
                    </div>
                </div>
                <v-form autocomplete="off" ref="form">
                    <div class="md:tw-mt-5">
                        
                        <v-text-field
                            label="Email or phone number"
                            placeholder="Email or phone number"
                            outlined dense
                        ></v-text-field>
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
</template>

<script>
export default {
    layout: 'authadmin',
    components: {
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