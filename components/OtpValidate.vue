<template>
  <div class="md:tw-flex md:tw-p-6">
    <div class="md:tw-w-3/12 tw-w-full"></div>
    <div class="md:tw-w-6/12 tw-w-full md:tw-p-6">
      <v-card>
        <v-card-title>Farm Konnect</v-card-title>
        <div class="md:tw-p-6">
          <h1> Check your Mail</h1>
          <v-card-text> <p>
            We sent a One Time Password.(OTP) We’ve sent a six-digit
            confirmation code to ola***@gmail.com and 09099749***. Enter it
            below to confirm your email address and mobile number.
          </p>
          </v-card-text>

          <v-otp-input
            ref="otpInput"
            input-classes="otp-input"
            separator="-"
            :num-inputs="4"
            :should-auto-focus="true"
            :is-input-num="true"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
          />

          
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',

  methods: {
    handleOnComplete(value) {
      console.log('OTP completed: ', value)
    },
    handleOnChange(value) {
      console.log('OTP changed: ', value)
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput()
    },
  },
}
</script>
<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
