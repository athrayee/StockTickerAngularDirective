module RL.SS.Portal.RLToday.StockTicker {

    export interface IStockTicker {

        Change_PercentChange: number; 
        DaysHigh: number; 
        DaysLow: number;
        LastTradeDate: Date; 
        LastTradePriceOnly: number;
        LastTradeTime: Date; 
        MarketCapitalization: number; 
        Name: string; 
        Symbol: string; 
        YearHigh: number; 
        YearLow: number;

    }

    export class StockTickerInfo implements IStockTicker {
        private _changePercentage: number;
        private _daysHigh: number;
        private _daysLow: number;
        private _lastTradeDate: Date;
        private _lastTradePriceOnly: number;
        private _lastTradeTime: Date;
        private _marketCapitalization: number;
        private _name: string;
        private _symbol: string;
        private _yearHigh: number;
        private _yearLow: number;

        constructor() {

        }

        get Change_PercentChange(): number {
            return this._changePercentage;
        }
        set Change_PercentChange(value: number) {
            this._changePercentage = value;
        }

        get DaysHigh(): number {
            return this._daysHigh;
        }
        set DaysHigh(value: number) {
            this._daysHigh = value;
        }
        get DaysLow(): number {
            return this._daysLow;
        }
        set DaysLow(value: number) {
            this._daysLow = value;
        }
        get LastTradeDate(): Date {
            return this._lastTradeDate;
        }
        set LastTradeDate(value: Date) {
            this._lastTradeDate = value;
        }
        get LastTradePriceOnly(): number {
            return this._lastTradePriceOnly;
        }
        set LastTradePriceOnly(value: number) {
            this._lastTradePriceOnly = value;
        }
        get LastTradeTime(): Date {
            return this._lastTradeTime;
        }
        set LastTradeTime(value: Date) {
            this._lastTradeTime = value;
        }
        get MarketCapitalization(): number {
            return this._marketCapitalization;
        }
        set MarketCapitalization(value: number) {
            this._marketCapitalization = value;
        }
        get Name(): string {
            return this._name;
        }
        set Name(value: string) {
            this._name = value;
        }
        get Symbol(): string {
            return this._symbol;
        }
        set Symbol(value: string) {
            this._symbol = value;
        }
        get YearHigh(): number {
            return this._yearHigh;
        }
        set YearHigh(value: number) {
            this._yearHigh = value;
        }
        get YearLow(): number {
            return this._yearLow;
        }
        set YearLow(value: number) {
            this._yearLow = value;
        }
    }
}