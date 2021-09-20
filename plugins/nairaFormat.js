import Vue from 'vue'

export default () => {
    Vue.filter('nairaFormat', function (val) {
        const formatter = new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2
        })
        return formatter.format(val);
    })
}