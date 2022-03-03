"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Square_1 = require("./components/Square/Square");
var map = [
    ["compass", "desert", ["letter", "g"], "desert", "grass", "grass2"],
    [["letter", "r"], ["image", "tree"], "sea", "sea", "desert", "desert2"],
    ["desert2", "desert", "grass2", ["letter", "y"], "desert2", ["image", "boat"]],
    ["sea", "grass", ["image", "mountain"], "grass2", "grass", "sea"],
    [["image", "castle"], "desert", "sea", "desert", ["letter", "p"], "desert2"],
    ["sea", ["image", "city"], "sea", ["letter", "b"], "sea", "sea"]
];
var Map = function () {
    return (react_1.default.createElement("table", null, map.map(function (row) {
        return row.map(function (cell) { return react_1.default.createElement(Square_1.default, { classes: cell }); });
    })));
};
exports.default = Map;
