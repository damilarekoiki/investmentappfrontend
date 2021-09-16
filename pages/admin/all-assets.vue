<template>
    <section>
        <section>
            <span class="tw-text-2xl tw-font-bold"> All Assets </span>
        </section>
        <main class="tw-pt-6">
            <div class="tw-flex tw-pb-4" v-for="n in 5" :key="n">
                <article class="tw-w-6/12" v-for="i in 2" :key="i">
                    <Asset />
                </article>
            </div>
        </main>
    </section>
</template>

<script>
    import Asset from "@/components/Asset"
    export default {
        layout: 'dashboardadmin',
        components: {
            Asset
        }
    }
</script>

<style>

</style>