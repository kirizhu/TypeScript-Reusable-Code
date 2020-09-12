"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
//Enum - enumeration (is also a type) compiled to object in js
//By using Enums we are signaling to other engineers that this is a collection of very closely related values
//values cannot be added to enums at runtime
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
