var RL;
(function (RL) {
    var SS;
    (function (SS) {
        var Portal;
        (function (Portal) {
            var RLToday;
            (function (RLToday) {
                var Directives;
                (function (Directives) {
                    //export function stockticker(): directives {
                    //    return {
                    //        restrict: 'E',
                    //        scope: {
                    //            name:"@"
                    //        },
                    //    }
                    //}
                    var StockTicer = (function () {
                        function StockTicer() {
                            this.restrict = 'E';
                            this.scope = {
                                name: "@"
                            };
                            this.controller = RL.SS.Portal.RLToday.StockTicker.Controllers.StockTickerController;
                            this.controllerAs = "vm";
                            this.templateUrl = "/app/StockTicker/StockTickerTemplate.html";
                        }
                        //public replace = true;
                        StockTicer.CreateDirective = function () {
                            var directive = function () {
                                return new StockTicer();
                            };
                            directive['$inject'] = [''];
                            return directive;
                        };
                        return StockTicer;
                    })();
                    Directives.StockTicer = StockTicer;
                    angular.module("stockticker").directive("stockTicker", [StockTicer.CreateDirective()]);
                })(Directives = RLToday.Directives || (RLToday.Directives = {}));
            })(RLToday = Portal.RLToday || (Portal.RLToday = {}));
        })(Portal = SS.Portal || (SS.Portal = {}));
    })(SS = RL.SS || (RL.SS = {}));
})(RL || (RL = {}));
