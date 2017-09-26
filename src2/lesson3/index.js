/*
var headModel = Backbone.Model.extend({
    url: 'http://advertising.test.fang.com/BannerAdplace/GetAdPlacePriceList.do',
    parse: function(response) {
        return response[0];
    }
});

var headM = new headModel();

var headView = Backbone.View.extend({
    tagName: "thead",
    template: _.template($("#testTml1").html(), {
        evaluate: /\{\{(.+?)\}\}/g,
        interpolate: /\{\{\=(.+?)\}\}/g
    }),
    events: {

    },
    render() {
        var ans = this.template(this.model.toJSON());
        this.$el.html(ans);
        return this;
    }
})

var appView = Backbone.View.extend({
    el: $("body"),
    initialize: function() {
        this.listenTo(headM, "change", this.renderHeadView);

        headM.fetch({
            data: {
                starttime: '2017-08-31',
                endtime: '2017-09-30',
                orderid: 'XCSBJ2017083027283'
            }
        });
    },
    renderHeadView: function() {
        var view_head = new headView({
            model: headM
        });
        this.$("#tb").append(view_head.render().el);
    }
})

new appView();
*/


var headModel = Backbone.Model.extend({
    url: 'https://malls.3g.fang.com/api/shop/GetCityInfo?cityShort=bj',
    parse: function(response) {
        return response.ReturnObject;
    }
});

var headM = new headModel();

var headView = Backbone.View.extend({
    tagName: "thead",
    template: _.template($("#testTml2").html()),
    events : {
        "click th":"showModal"
    },
    render() {
        console.log(this.model.toJSON())
        var ans = this.template(this.model.toJSON());
        this.$el.html(ans);
        return this;
    },
    showModal :function(){
        alert(1)
    }
})

var appView = Backbone.View.extend({
    el: $("body"),
    initialize: function() {
        this.listenTo(headM, "change", this.renderHeadView);

        headM.fetch({
            data: {
                starttime: '2017-08-31',
                endtime: '2017-09-30',
                orderid: 'XCSBJ2017083027283'
            }
        });
    },
    renderHeadView: function() {
        var view_head = new headView({
            model: headM
        });
        this.$("#tb").append(view_head.render().el);
    }
})

new appView(); 