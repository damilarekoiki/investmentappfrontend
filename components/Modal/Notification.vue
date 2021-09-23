<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >

            <v-card>
                <v-card-title :class="['text-h4']">
                    <div class="tw-text-center tw-w-full">
                        {{headerText}}
                    </div>
                </v-card-title>

                <v-card-text class="tw-text-center text-h6">
                    {{contentText}}
                </v-card-text>

                <SuccessIcon  v-if="icon == 'success'" />
                <ErrorIcon v-if="icon == 'error'" />
                <WarningIcon v-if="icon ==  'warning'" />

                

                <!-- <v-divider></v-divider> -->

                <v-card-actions class="tw-mt-8">
                    <v-btn
                        text
                        :color="cancelColor"
                        v-if="showCancelButton"
                        @click="cancel"
                    >
                        {{cancelText}}
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        :color="okColor"
                        @click="ok"

                    >
                        {{okText}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import SuccessIcon from "@/components/Icons/SuccessIcon"
    import ErrorIcon from "@/components/Icons/ErrorIcon"
    import WarningIcon from "@/components/Icons/WarningIcon"

    export default {
        name: "NotificationModal",
        props: {
            headerText: String,
            headerColor: {
                type: String,
                default: 'primary'
            },
            contentText: String,
            okText: {
                type: String,
                default: 'OK'
            },
            cancelText: {
                type: String,
                default: 'Cancel'
            },
            okColor: {
                type: String,
                default: 'primary'
            },
            cancelColor: {
                type: String,
                default: 'error'
            },
            open: Boolean,
            showCancelButton: {
                type: Boolean,
                default: true
            },
            icon: String,
        },
        components: {
            SuccessIcon,
            ErrorIcon,
            WarningIcon
        },
        data () {
            return {
                dialogOpen: false,
            }
        },
        methods: {
            cancel(){
                this.dialog = false;
                this.$emit('cancelCallback')
            },
            ok(){
                this.dialog = false;
                this.$emit('okCallback')
            },
        },
        computed: {
            dialog: {
                get(){
                    return this.dialogOpen
                },
                set(newValue){
                    this.dialogOpen = newValue
                }
                
            }
        },
        watch:{
            open(val){
                this.dialogOpen = val;
            }
        }
    }
</script>

<style scoped>
    .v-btn {
        font-weight: bold;
        font-size: 0.975rem;
    }
</style>