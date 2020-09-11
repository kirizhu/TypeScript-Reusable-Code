"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//encoding tells readfilesync whta type of content we expect to find inside the csv file. utf8 text content (string) otherwise we would get a buffer
//matches is now a big string that contains all diff matches
var matches = fs_1.default
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
// first we split on row
//then we map the rows to and array of strings that are split on the comma.
console.log(matches);
