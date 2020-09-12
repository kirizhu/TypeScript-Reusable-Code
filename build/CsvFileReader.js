"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
//encoding tells readfilesync whta type of content we expect to find inside the csv file. utf8 text content (string) otherwise we would get a buffer
var utils_1 = require("./utils");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        // first we split on row
        //then we map the rows to and array of strings that are split on the comma.
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
