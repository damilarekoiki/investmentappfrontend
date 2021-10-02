<template>
    <section>
        <section class="tw-flex tw-justify-between">
            <div class="tw-w-3/12">
                <span class="tw-text-2xl tw-font-bold"> All Assets </span>
            </div>
            <div class="tw-w-9/12 tw-flex tw-justify-end">
            
                <div class="tw-pr-16">
                    <ItemsSearchField />
                </div>

                <div>
                    <ItemsDropdownMenu />
                </div>

            </div>
            
        </section>
        <main class="tw-pt-6">
            <!-- <div class="tw-flex tw-pb-4" v-for="n in 5" :key="n">
                <article class="tw-w-4/12" :class="{ 'tw-pl-3': i != 1 }" v-for="i in 3" :key="i">
                    <Asset />
                </article>
            </div> -->




            <section class="tw-pt-3">
        
                <div v-if="$fetchState.pending">
                
                    <AssetsPlaceholder />
                    

                </div>

                
                <div v-else-if="$fetchState.error">
                    <div>
                        An error occurred
                    </div>
                    <div class="tw-pt-3">
                        <v-btn color="primary" @click="$fetch">
                            Retry
                        </v-btn>
                    </div>
                </div>

                <div v-else>

                    <div class="md:tw-flex tw-pb-4"  v-for="row in rowCount" :key="row">

                        <article
                        class="md:tw-w-4/12 tw-w-full"   :class="{ 'tw-pl-3': i != 0 }"
                        v-for="item, index in itemCountInRow(row)"
                        :key="index">

                            <Asset :name="item.asset_name" :image="item.image"
                            :price="item.price" :size="item.size" :description="item.description" />
                        
                        </article>

                    </div>

                </div>

            </section>
        </main>
    </section>
</template>

<script>
    import Asset from "@/components/Asset"
    import ItemsSearchField from "@/components/ItemsSearchField"
    import ItemsDropdownMenu from "@/components/ItemsDropdownMenu"
    import AssetsPlaceholder from "@/components/AssetsPlaceholder"

    export default {
        
        components: {
            Asset,
            ItemsSearchField,
            ItemsDropdownMenu,
            AssetsPlaceholder,
            
        },
        data(){
            return {
                itemsPerRow: 3,
                assets: []
            }
        },
        async fetch(){
            
            let url = this.$store.state.apiStore.admin.fetchAssets;
            
            let response = await this.$axios.get(`${url}`)

            console.log(response);
            
            let data = response.data;
            data = data.data
            this.assets = data
                
        },
        methods: {
            itemCountInRow(index){
                return this.assets.slice((index - 1) * this.itemsPerRow, index * this.itemsPerRow)
                
            },
        },
        computed:{
            rowCount(){
                return Math.ceil(this.assets.length / this.itemsPerRow);
            }
        },
    }
</script>

<style>

</style>