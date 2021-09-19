import Vue from 'vue'

export default () => {
    Vue.filter('numberFormat', function (val, fractionDigits=0) {
        const formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: fractionDigits
        })
        return formatter.format(val);
    })
}