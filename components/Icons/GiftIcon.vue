<template>
    <lottie :width="200" :height="200" :options="lottieOptions" @animCreated="handleAnimation" />
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/assets/icons/gift-with-stars.json";
export default {
    components: {
        lottie
    },
    data() {
        return {
            anim: null, // for saving the reference to the animation
            lottieOptions: { animationData: animationData.default}
        };
    },
    methods: {
        handleAnimation(anim) {
            this.anim = anim;
        },
        play() {
            this.anim.play();
        },
        stop() {
            this.anim.stop();
        },
    },
    created(){
    }
}
</script>

<style>

</style>