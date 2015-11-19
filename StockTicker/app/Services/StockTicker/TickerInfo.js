var RL;
(function (RL) {
    var SS;
    (function (SS) {
        var Portal;
        (function (Portal) {
            var RLToday;
            (function (RLToday) {
                var StockTicker;
                (function (StockTicker) {
                    var Services;
                    (function (Services) {
                        var StockQuaoteService = (function () {
                            function StockQuaoteService($q, dataAccessService) {
                                this.$q = $q;
                                this.dataAccessService = dataAccessService;
                                var vm = this;
                            }
                            StockQuaoteService.prototype.getStockInfo = function () {
                                var defer = this.$q.defer();
                                var stockInfo = this.dataAccessService.getStockDetails("GOOG");
                                stockInfo.get(function (data) {
                                    console.log(data);
                                    var stockInfo = new RL.SS.Portal.RLToday.StockTicker.StockTickerInfo();
                                    stockInfo.Change_PercentChange = data.query.results.quote.Change_PercentChange;
                                    stockInfo.DaysHigh = data.query.results.quote.DaysHigh;
                                    stockInfo.DaysLow = data.query.results.quote.DaysLow;
                                    stockInfo.LastTradeDate = data.query.results.quote.LastTradeDate;
                                    stockInfo.LastTradePriceOnly = data.query.results.quote.LastTradePriceOnly;
                                    stockInfo.LastTradeTime = data.query.results.quote.LastTradeTime;
                                    stockInfo.MarketCapitalization = data.query.results.quote.MarketCapitalization;
                                    stockInfo.Name = data.query.results.quote.Name;
                                    stockInfo.Symbol = data.query.results.quote.Symbol;
                                    stockInfo.YearHigh = data.query.results.quote.YearHigh;
                                    stockInfo.YearLow = data.query.results.quote.YearLow;
                                    defer.resolve(stockInfo);
                                });
                                return defer.promise;
                            };
                            StockQuaoteService.$inject = ["$q", "dataAccessservice"];
                            return StockQuaoteService;
                        })();
                        Services.StockQuaoteService = StockQuaoteService;
                        angular.module("stockticker").service("stockQuoteService", StockQuaoteService);
                    })(Services = StockTicker.Services || (StockTicker.Services = {}));
                })(StockTicker = RLToday.StockTicker || (RLToday.StockTicker = {}));
            })(RLToday = Portal.RLToday || (Portal.RLToday = {}));
        })(Portal = SS.Portal || (SS.Portal = {}));
    })(SS = RL.SS || (RL.SS = {}));
})(RL || (RL = {}));
