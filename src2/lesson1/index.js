var headModel = Backbone.Model.extend({
    url: 'http://advertising.test.fang.com/BannerAdplace/GetAdPlacePriceList.do',
    parse: function(response) {
        return response[0];
    }
});

var headM = new headModel();
headM.fetch({
    data: {
        starttime: '2017-08-31',
        endtime: '2017-09-30',
        orderid: 'XCSBJ2017083027283'
    }
});
/* 
var headModel = Backbone.Model.extend({
    url: 'https://malls.3g.fang.com/api/shop/GetCityInfo?cityShort=bj',
    parse: function(response) {
        return response.ReturnObject;
    }
});

var headM = new headModel();
headM.fetch(); */