<template>
    <section>
        <section>
            <span class="tw-text-2xl tw-font-bold">Users</span>
        </section>
            <main class="tw-pt-6">
                <Users />
            </main>
    </section>
</template>

<script>
    import Users from "@/components/Users"
    export default {
        layout: 'dashboardadmin',
        components: {
            Users,
        }
    }
</script>

<style>

</style>