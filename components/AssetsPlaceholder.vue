<template>

    <section>
        <div class="tw-flex tw-justify-between" v-for="n in 6" :key="n">

            <div class="tw-w-3/12" v-for="i in 3" :key="i">

                <v-skeleton-loader
                    max-width="300"
                    type="card"
                ></v-skeleton-loader>

            </div>

        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>