<template>

    <section>

        <section>
            <span class="tw-text-2xl tw-font-bold">Fund Wallet</span>
        </section>

        <section class="tw-pt-3">
            <v-card>
                <main class="md:tw-flex md:tw-justify-between tw-p-6">
                    <div class="md:tw-w-5/12 tw-w-full">

                        <article class="">
                            <WalletBalance />
                        </article>

                        <article class="tw-pt-6">
                            <v-card>
                                <div class="tw-p-6">
                                    <v-form ref="form">
                                        <v-text-field
                                            label="Amount"
                                            placeholder="Enter Amount"
                                            outlined dense
                                        ></v-text-field>
                                        <v-btn color="primary">
                                            Fund wallet
                                        </v-btn>
                                    </v-form>
                                </div>
                            </v-card>
                        </article>
                    </div>

                    <div class="md:tw-w-6/12 tw-w-full md:tw-pl-12">

                        <div class="tw-pt-4">
                            <Transactions />
                        </div>

                    </div>
                    
                </main>
            </v-card>
        </section>
    </section>
</template>

<script>
    import WalletBalance from "@/components/WalletBalance"
    import Transactions from "@/components/Transactions"
    export default {
        layout: 'dashboardadmin',
        components: {
            WalletBalance,
            Transactions
        }
    }
</script>

<style>

</style>