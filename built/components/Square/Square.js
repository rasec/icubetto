"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React_1 = require("React");
var square_scss_1 = require("./square.scss");
var Square = function (_a) {
    var classes = _a.classes;
    var className = square_scss_1.default.square;
    /* if (typeof classes !== 'string') {
      classes.forEach(classNameItem => {
        className = `${className} ${theme[classNameItem]}`;
      });
    } else {
      className = `${theme[classes]}`;
    }*/
    return React_1.default.createElement("div", { className: className });
};
exports.default = Square;
