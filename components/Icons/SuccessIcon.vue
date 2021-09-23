<template>
    <lottie :width="150" :height="150" :options="lottieOptions" @animCreated="handleAnimation" />
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/assets/icons/5449-success-tick.json";
export default {
    components: {
        lottie
    },
    data() {
        return {
            anim: null, // for saving the reference to the animation
            lottieOptions: { animationData: animationData.default, loop: false }
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