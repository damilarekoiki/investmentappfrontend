<template>
    <v-img
        :src="src"
        :height="height"
        class="grey lighten-2"
    >
        <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
                <v-progress-circular
                indeterminate
                color="grey lighten-5"
                ></v-progress-circular>
            </v-row>
        </template>
    </v-img>
</template>

<script>
    export default {
        props: ['src', 'height']
    }
</script>

<style>

</style>