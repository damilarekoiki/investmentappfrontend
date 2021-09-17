<template>
    <div>
        <span class="tw-text-gray-800">1 - 15</span>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-icon
                    v-bind="attrs"
                    v-on="on"
                >
                    mdi-menu-down
                </v-icon>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                >
                    <v-list-item-title>
                        <span class="tw-cursor-pointer">
                            {{ item.title }}
                        </span>
                        </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                items: [
                    { title: '16 - 30' },
                    { title: '31-45' },
                    { title: '46-100' },
                    { title: '100 - 400' },
                    { title: 'All' },
                ],
            }
        }
    }
</script>

<style>

</style>