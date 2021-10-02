<template>
    <v-card
        max-width="400"
    >
        
        <ImageEl :src="`${$store.state.apiStore.fileStorage}/${image}`" height="200" />

        <v-card-subtitle class="pb-0">
            {{name}}
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{price | nairaFormat}}</div>
            <div>{{size}}</div>
            <div>
                {{description}}
            </div>
        </v-card-text>

        <v-card-actions>
            <v-btn
                color="primary"
                text
            >
                More details
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import ImageEl from "@/components/ImageEl.vue"
    export default {
        props: ['name', 'image', 'price', 'size', 'description'],
        components:{
            ImageEl
        }
    }
</script>