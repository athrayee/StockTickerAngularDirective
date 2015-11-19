module RL.SS.Portal.RLToday.StockTicker.Controllers {

    import commonServices = RL.SS.Portal.RLToday.Services;
    import stockTickerServices = RL.SS.Portal.RLToday.StockTicker.Services;

    export class StockTickerController {

        public quoteresult: IStockTicker;
        static $inject = ["stockQuoteService"];
        constructor(private stockquoteservice : stockTickerServices.StockQuaoteService) {

            this.getStockDetail();
        }

        getStockDetail(): void {

            this.stockquoteservice.getStockInfo().then((data: IStockTicker) => {

                this.quoteresult = data;
                console.log(data);
            });

        }

        stockQuoteClass(price: string): string {
            if (price != null) {
                var stockChange = price.split(" - ")[0];
                var stockChangeDirection = stockChange.charAt(0);
                return stockChangeDirection == '+' ? 'companyStockUp' : 'companyStockDown';
            }

        }
    }
    angular.module("stockticker").controller("stockTickerController", StockTickerController);
}