let app = new Vue({
    el: "#content",
    data: {
        msg: "Garo",
        prebuilts: []
    },
    created: function() {
        fetch("prebuilds.json").then(res => res.json()).then(jason => {
            this.prebuilts = _.sortBy(jason, ['price'])
        });
    }
})