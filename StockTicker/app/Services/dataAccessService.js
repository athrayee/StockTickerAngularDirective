var RL;
(function (RL) {
    var SS;
    (function (SS) {
        var Portal;
        (function (Portal) {
            var RLToday;
            (function (RLToday) {
                var Services;
                (function (Services) {
                    var DataAccessService = (function () {
                        function DataAccessService($resource) {
                            this.$resource = $resource;
                        }
                        DataAccessService.prototype.getStockDetails = function (stockSymbol) {
                            return this.$resource("https://query.yahooapis.com/v1/public/yql?q=select%20Symbol%2CName%2CDaysLow%2CDaysHigh%2CYearLow%2CYearHigh%2CLastTradePriceOnly%2CLastTradeDate%2CLastTradeTime%2CMarketCapitalization%2CChange_PercentChange%20from%20yahoo.finance.quotes%20where%20symbol%20%3D%20%22" + stockSymbol + "%22%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env");
                        };
                        DataAccessService.inject = ["$resource"];
                        return DataAccessService;
                    })();
                    Services.DataAccessService = DataAccessService;
                    angular.module("stockticker").service("dataAccessservice", DataAccessService);
                })(Services = RLToday.Services || (RLToday.Services = {}));
            })(RLToday = Portal.RLToday || (Portal.RLToday = {}));
        })(Portal = SS.Portal || (SS.Portal = {}));
    })(SS = RL.SS || (RL.SS = {}));
})(RL || (RL = {}));
