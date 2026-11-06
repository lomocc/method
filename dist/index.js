"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * 保存方法的参数和this对象,方便后面调用
 * import method from 'method-wrapper';
 * var method = method(func, [], this);
 * setTimeout(method, 50);
 * Created by vincent on 16/7/1.
 */
exports.default = function (func, context, args) {
  return function (newContext, newArgs) {
    return func && func.apply(newContext || context, newArgs || args);
  };
};
