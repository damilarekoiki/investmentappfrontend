<template>
    <section>
        <section>
            <span class="tw-text-2xl tw-font-bold"> Model Details </span>
        </section>
        <main class="tw-pt-6 tw-flex md:tw-flex-row tw-flex-col-reverse ">
            <article class="md:tw-w-6/12 tw-w-full">
                <v-card>
                        
                    <v-card-text>
                        <div class="tw-flex tw-bg-blue-400 tw-justify-between
                            tw-p-2 tw-rounded-md tw-bg-opacity-25"
                        >
                            <div class="tw-w-4/12">Name</div>
                            <div class="tw-w-6/12 tw-font-bold">Beans management</div>
                        </div>

                        <div class="tw-flex tw-bg-green-400 tw-justify-between
                            tw-p-2 tw-mt-2 tw-rounded-md tw-bg-opacity-25"
                        >
                            <div class="tw-w-6/12">Service charge type</div>
                            <div class="tw-w-6/12 tw-font-bold">Fixed per square meter</div>
                        </div>

                        <div
                            class="tw-flex tw-bg-blue-400 tw-justify-between
                            tw-p-2 tw-mt-2 tw-rounded-md tw-bg-opacity-25"
                        >
                            <div class="tw-w-4/12">Service charge</div>
                            <div class="tw-w-6/12 tw-font-bold">&#8358; 20,000</div>
                        </div>

                        <div class="tw-flex tw-bg-green-400 tw-justify-between
                            tw-p-2 tw-mt-2 tw-rounded-md tw-bg-opacity-25"
                        >
                            <div class="tw-w-6/12">Support for co ownership</div>
                            <div class="tw-w-6/12 tw-font-bold">Allow support</div>
                        </div>

                        <div
                            class="tw-flex tw-bg-blue-400 tw-justify-between
                            tw-p-2 tw-mt-2 tw-rounded-md tw-bg-opacity-25"
                        >
                            <div class="tw-w-4/12">Managed by</div>
                            <div class="tw-w-6/12 tw-font-bold">Farmkonnect</div>
                        </div>

                        <div
                            class="tw-flex tw-bg-green-400 tw-justify-between
                            tw-p-2 tw-mt-2 tw-rounded-md tw-bg-opacity-25"
                        >
                            <div class="tw-w-6/12">Added by</div>
                            <div class="tw-w-6/12 tw-font-bold">
                                <DisplayUserText display="Adebisi Richard" />
                            </div>
                        </div>

                        <div class="tw-flex tw-bg-blue-400 tw-justify-between
                            tw-p-2 tw-mt-2 tw-rounded-md tw-bg-opacity-25"
                        >
                            <div class="tw-w-6/12">Date added</div>
                            <div class="tw-w-6/12 tw-font-bold">3rd July, 2021</div>
                        </div>
                    </v-card-text>
                        
                </v-card>
            </article>

            <article class="md:tw-w-6/12 tw-pl-32">
                <!-- <ImageEl src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" /> -->
                <section class="tw-pt-8">
                    <v-card>
                        <section class="tw-p-2">

                        
                        <div class="tw-font-bold">
                            Description
                        </div>

                        <div class="tw-pt-1 tw-text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        </div>
                        </section>
                    </v-card>
                </section>

            </article>
        </main>
    </section>
</template>

<script>
    import ImageEl from "@/components/ImageEl.vue"
    import DisplayUserText from "@/components/DisplayUserText.vue"
    export default {
        layout: 'dashboardadmin',
        components: {
            ImageEl,
            DisplayUserText,
        }
    }
</script>

<style></style>
