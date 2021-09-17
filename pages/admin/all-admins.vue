<template>
    <section>
        <section>
            <span class="tw-text-2xl tw-font-bold">Admins</span>
        </section>
            <main class="tw-pt-6">
                <Admins />
            </main>
    </section>
</template>

<script>
    import Admins from "@/components/Admins"
    export default {
        layout: 'dashboardadmin',
        components: {
            Admins,
        }
    }
</script>

<style>

</style>