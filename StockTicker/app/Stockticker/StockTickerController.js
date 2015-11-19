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
                    var Controllers;
                    (function (Controllers) {
                        var StockTickerController = (function () {
                            function StockTickerController(stockquoteservice) {
                                this.stockquoteservice = stockquoteservice;
                                this.getStockDetail();
                            }
                            StockTickerController.prototype.getStockDetail = function () {
                                var _this = this;
                                this.stockquoteservice.getStockInfo().then(function (data) {
                                    _this.quoteresult = data;
                                    console.log(data);
                                });
                            };
                            StockTickerController.prototype.stockQuoteClass = function (price) {
                                if (price != null) {
                                    var stockChange = price.split(" - ")[0];
                                    var stockChangeDirection = stockChange.charAt(0);
                                    return stockChangeDirection == '+' ? 'companyStockUp' : 'companyStockDown';
                                }
                            };
                            StockTickerController.$inject = ["stockQuoteService"];
                            return StockTickerController;
                        })();
                        Controllers.StockTickerController = StockTickerController;
                        angular.module("stockticker").controller("stockTickerController", StockTickerController);
                    })(Controllers = StockTicker.Controllers || (StockTicker.Controllers = {}));
                })(StockTicker = RLToday.StockTicker || (RLToday.StockTicker = {}));
            })(RLToday = Portal.RLToday || (Portal.RLToday = {}));
        })(Portal = SS.Portal || (SS.Portal = {}));
    })(SS = RL.SS || (RL.SS = {}));
})(RL || (RL = {}));
