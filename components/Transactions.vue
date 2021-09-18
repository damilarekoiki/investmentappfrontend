<template>
    <v-card>
        <article class="tw-p-6">
            <div class="tw-flex tw-justify-between">
                <div class="tw-text-xl tw-font-bold">
                    Recent Transactions
                </div>
                <!-- <div class="tw-w-6">
                    <div class="tw-w-10 tw-h-10 tw-p-2 tw-rounded-full tw-bg-gray-900
                    tw-bg-opacity-25 tw-cursor-default tw-text-center">
                        <v-icon color="#36454f">
                            mdi-briefcase
                        </v-icon>
                    </div>
                </div> -->
            </div>
            <section class="tw-pt-6">
                <div class="tw-flex tw-justify-between tw-font-bold tw-text-lg">
                    <span>Amount</span>
                    <span>Balance</span>
                </div>
                <main>
                    <div v-for="(transaction,index) in transactions" :key="index"
                    class="tw-flex tw-justify-between tw-py-3 tw-border-gray-300 tw-border-b-1">
                        <div>
                            <div>
                                <span class="tw-pr-1">
                                    <v-icon v-if="transaction.type == 0">mdi-arrow-top-right</v-icon>
                                    <v-icon v-if="transaction.type == 1">mdi-arrow-bottom-left</v-icon>
                                </span>
                                <span class="tw-font-bold tw-text-gray-700">
                                    <span v-if="transaction.type == 0">-</span>
                                    &#8358;{{transaction.amount}}
                                </span>
                            </div>
                            <div class="tw-pt-1">
                                <div
                                :class="[`tw-p-2 tw-text-center tw-rounded tw-bg-opacity-25`,
                                transaction.type==0 ? `tw-bg-pink-300 tw-text-pink-800` :
                                `tw-bg-purple-300 tw-text-purple-800`]">
                                    {{transaction.type == 0 ? 'Debit' : 'Credit'}}
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="tw-font-bold tw-text-gray-700 tw-flex tw-justify-end">
                                &#8358;{{transaction.wallet_balance}}
                            </div>
                            <div class="tw-pt-3 tw-flex tw-justify-end">
                                {{transaction.created_at}}
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </article>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        transactions: [
            {
                id: 1,
                type: 1,
                amount: 20000,
                wallet_balance: 20000,
                created_at: 'Jul 24, 2021'
            },
            {
                id: 2,
                type: 0,
                amount: 15000,
                wallet_balance: 5000,
                created_at: 'Jul 24, 2021'
            },
            {
                id: 3,
                type: 0,
                amount: 4000,
                wallet_balance: 1000,
                created_at: 'Jul 24, 2021'
            },
            {
                id: 4,
                type: 1,
                amount: 8000,
                wallet_balance: 9000,
                created_at: 'Jul 24, 2021'
            },
        ]
    })
}
</script>

<style>

</style>