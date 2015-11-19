module RL.SS.Portal.RLToday.StockTicker.Services {

    import services = RL.SS.Portal.RLToday.Services;

    export class StockQuaoteService {

        static $inject = ["$q", "dataAccessservice"];

        constructor(private $q: ng.IQService, private dataAccessService: services.DataAccessService) {
            var vm = this;
        }

        public getStockInfo(): ng.IPromise<RL.SS.Portal.RLToday.StockTicker.IStockTicker> {

            let defer = this.$q.defer<RL.SS.Portal.RLToday.StockTicker.IStockTicker>();

            var stockInfo = this.dataAccessService.getStockDetails("GOOG");
            stockInfo.get((data) => {
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


        }
    }

    angular.module("stockticker").service("stockQuoteService", StockQuaoteService);
}