function isNumeric(n) {
    return !isNaN(parseFloat(n))
}

let app = new Vue({
    el: "#content",
    data: {
        msg: "Garo",
        prebuilts: [],
        minprice: "",
        maxprice: "",
    },
    created: function() {
        fetch("prebuilds.json").then(res => res.json()).then(jason => {
            this.prebuilts = _.sortBy(jason, ['price'])
        });
    },
    computed: {
        safeMinPrice: function() {
            return isNumeric(this.minprice) ? parseFloat(this.minprice) : 500
        },
        safeMaxPrice: function() {
            return isNumeric(this.maxprice) ? parseFloat(this.maxprice) : 2500
        },
        visiblePrebuilts: function() {
            return this.prebuilts.filter(pre => pre.price >= this.safeMinPrice && pre.price <= this.safeMaxPrice)
        }
    }
})