module RL.SS.Portal.RLToday.Directives {

    import directives = ng.IDirective;

    export interface IStockTicker {
    }

    //export function stockticker(): directives {

    //    return {

    //        restrict: 'E',
    //        scope: {
    //            name:"@"
    //        },
    //    }
    //}

    export class StockTicer implements directives{

        constructor() {
 
        }

        public restrict = 'E';
        public scope = {
            name:"@"
        };
        public controller = RL.SS.Portal.RLToday.StockTicker.Controllers.StockTickerController;

        public controllerAs = "vm";

        public templateUrl = "/app/StockTicker/StockTickerTemplate.html";

        //public replace = true;

        public static CreateDirective() {
            var directive = () => {
                return new StockTicer();
            };

            directive['$inject'] = [''];

            return directive;
           
        }
        }

    angular.module("stockticker").directive("stockTicker", [StockTicer.CreateDirective()]);

}