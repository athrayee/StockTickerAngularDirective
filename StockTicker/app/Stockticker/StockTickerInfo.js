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
                    var StockTickerInfo = (function () {
                        function StockTickerInfo() {
                        }
                        Object.defineProperty(StockTickerInfo.prototype, "Change_PercentChange", {
                            get: function () {
                                return this._changePercentage;
                            },
                            set: function (value) {
                                this._changePercentage = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "DaysHigh", {
                            get: function () {
                                return this._daysHigh;
                            },
                            set: function (value) {
                                this._daysHigh = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "DaysLow", {
                            get: function () {
                                return this._daysLow;
                            },
                            set: function (value) {
                                this._daysLow = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "LastTradeDate", {
                            get: function () {
                                return this._lastTradeDate;
                            },
                            set: function (value) {
                                this._lastTradeDate = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "LastTradePriceOnly", {
                            get: function () {
                                return this._lastTradePriceOnly;
                            },
                            set: function (value) {
                                this._lastTradePriceOnly = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "LastTradeTime", {
                            get: function () {
                                return this._lastTradeTime;
                            },
                            set: function (value) {
                                this._lastTradeTime = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "MarketCapitalization", {
                            get: function () {
                                return this._marketCapitalization;
                            },
                            set: function (value) {
                                this._marketCapitalization = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "Name", {
                            get: function () {
                                return this._name;
                            },
                            set: function (value) {
                                this._name = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "Symbol", {
                            get: function () {
                                return this._symbol;
                            },
                            set: function (value) {
                                this._symbol = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "YearHigh", {
                            get: function () {
                                return this._yearHigh;
                            },
                            set: function (value) {
                                this._yearHigh = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(StockTickerInfo.prototype, "YearLow", {
                            get: function () {
                                return this._yearLow;
                            },
                            set: function (value) {
                                this._yearLow = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        return StockTickerInfo;
                    })();
                    StockTicker.StockTickerInfo = StockTickerInfo;
                })(StockTicker = RLToday.StockTicker || (RLToday.StockTicker = {}));
            })(RLToday = Portal.RLToday || (Portal.RLToday = {}));
        })(Portal = SS.Portal || (SS.Portal = {}));
    })(SS = RL.SS || (RL.SS = {}));
})(RL || (RL = {}));
