<template>
    <v-card color="#002D62" class="rounded-xl">
        <article class="tw-p-6">
            <div class="tw-flex tw-justify-between">
                <div class="tw-text-xl tw-text-gray-200">
                    Wallet Balance
                </div>
                <div class="tw-w-6">
                    <div class="tw-w-10 tw-h-10 tw-p-2 tw-rounded-full tw-bg-gray-200
                    tw-bg-opacity-25 tw-cursor-default tw-text-center">
                        <v-icon color="#f5f5f5">
                            mdi-briefcase
                        </v-icon>
                    </div>
                </div>
            </div>
            <section class="tw-pt-6">
                <span class="tw-text-2xl tw-font-bold tw-text-white">
                    &#8358;{{wallet_balance}}
                </span>
            </section>
        </article>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        wallet_balance: 9000,
    })
}
</script>

<style>

</style>