<template>
    <section>
        <section class="tw-flex tw-justify-between">
            <div class="tw-w-3/12">
                <span class="tw-text-2xl tw-font-bold"> All Models </span>
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
            <div class="tw-flex tw-pb-4" v-for="n in 5" :key="n">
                <article class="tw-w-4/12" :class="{ 'tw-pl-3': i != 1 }" v-for="i in 3" :key="i">
                    <Model />
                </article>
            </div>
        </main>
    </section>
</template>

<script>
    import Model from "@/components/Model"
    import ItemsSearchField from "@/components/ItemsSearchField"
    import ItemsDropdownMenu from "@/components/ItemsDropdownMenu"
    export default {
        
        components: {
            Model,
            ItemsSearchField,
            ItemsDropdownMenu,
        },
        data(){
            return {
                
            }
        }
    }
</script>

<style>

</style>