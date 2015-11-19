module RL.SS.Portal.RLToday.Services {

    import resource = ng.resource;

    export interface IDataAccessService {

        
    }

    export interface IStockResource extends resource.IResource<IStockResource> {

    }

    export class DataAccessService implements IDataAccessService {


        static inject = ["$resource"];
        constructor(private $resource: resource.IResourceService) {
        }
        getStockDetails(stockSymbol: string): resource.IResourceClass<IStockResource> {
            return this.$resource("https://query.yahooapis.com/v1/public/yql?q=select%20Symbol%2CName%2CDaysLow%2CDaysHigh%2CYearLow%2CYearHigh%2CLastTradePriceOnly%2CLastTradeDate%2CLastTradeTime%2CMarketCapitalization%2CChange_PercentChange%20from%20yahoo.finance.quotes%20where%20symbol%20%3D%20%22" + stockSymbol + "%22%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env");
           
        }
       
    }
    angular.module("stockticker").service("dataAccessservice", DataAccessService); 
}