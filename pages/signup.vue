<template>
    <div class="md:tw-flex md:tw-pt-10">
        
            <div class="md:tw-flex md:tw-justify-between tw-p-4">
                <div class="tw-w-6/12 md:tw-block tw-hidden">
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
                
                <div class="md:tw-w-4/12 tw-w-full">
                    <v-card class="tw-py-6 tw-px-6 rounded-lg" rounded elevation="15">
                        <div class="tw-flex tw-flex-col">
                            <div class="tw-font-bold tw-text-3xl tw-text-green-800">
                                Register
                            </div>
                            <div>
                                <span class="tw-text-gray-600">Already have an account?</span> <NuxtLink to="/login">
                                    <span class="tw-text-green-600">Login</span>
                                </NuxtLink>
                            </div>
                        </div>
                        <v-form autocomplete="off" ref="form">
                            <div class="md:tw-mt-5">
                                
                                <v-text-field
                                    label="First name"
                                    placeholder="First name"
                                    outlined dense
                                ></v-text-field>
                                <v-text-field
                                    label="Middle name"
                                    placeholder="Middle name"
                                    outlined dense
                                ></v-text-field>
                                <v-text-field
                                    label="Last name"
                                    placeholder="Last name"
                                    outlined dense
                                ></v-text-field>
                                <v-text-field
                                    label="Email"
                                    placeholder="Email"
                                    outlined dense
                                ></v-text-field>
                                <v-text-field
                                    label="Phone number"
                                    placeholder="Phone number"
                                    outlined dense
                                ></v-text-field>
                                <v-text-field
                                    label="Password"
                                    placeholder="Password"
                                    type="password"
                                    outlined dense
                                ></v-text-field>
                                <v-btn color="primary">
                                    Register
                                </v-btn>
                            </div>
                        </v-form>
                    </v-card>
                </div>
                
            </div>
            
        
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>