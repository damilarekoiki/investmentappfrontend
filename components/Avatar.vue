<template>
    <div>
        <v-avatar :color="color" :size="size" :tile="tile">
            <img
                v-if="image"
                :src="image"
                style=""
            >

            <span class="white--text " v-else :class="size<48 ? 'tw-text-xs': 'text-h5'">
                {{ fullName | initials }}
            </span>
            
        </v-avatar>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        size: {
            type: String,
            default: '48'
        },
        fullName: String,
        tile: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            colors: {
                pink: [
                    "a", "b", "c", "d", "e", "f", "g", "h"
                ],
                purple: [
                    "i", "j", "k", "l", "m", "n", "o", "p"
                ],
                orange: [
                    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
                ]
            },
            // color: 'blue'
        }
    },
    filters: {
        initials(val){
            if(val.length == 0) return "";

            let nameArray = val.split(" ");

            let firstName = "";
            let lastName = "";
            if (nameArray[0]) firstName = nameArray[0];
            if (nameArray[1]) lastName = nameArray[1];

            if(firstName){
                firstName = firstName.substring(0, 1)
            }
            if(lastName){
                lastName = lastName.substring(0, 1)
            }
            let initials = firstName + lastName;
            return initials
        }
    },
    computed: {
        color(){
            let fullName = this.fullName;
            let firstChar = fullName.charAt(0).toLowerCase();
            let colors = this.colors;

            const color = Object.keys(colors).find(key => colors[key].includes(firstChar));

            return color;
        }
    }
}
</script>

<style>

</style>