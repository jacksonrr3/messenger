"use strict";
exports.__esModule = true;
// const objectQueryStringify = (data: StringIndexed | any[], prefix: string): string[] => {
//   const res: string[] = [];
//   Object.entries(data).forEach(([key, value]) => {
//     if (Array.isArray(value) || typeof value === 'object') {
//       const vals = objectQueryStringify(value, `${prefix}[${key}]`);
//       res.push(...vals);
//       return;
//     }
//     res.push(`${prefix}[${key}]=${value}`);
//   });
//   return res;
// };
var isArrayOrObject = function (value) {
    var result = Array.isArray(value) || typeof value === 'object';
    return result;
};
var getKey = function (key, parentKey) {
    var result = parentKey ? parentKey + "[" + key + "]" : key;
    return result;
};
var getParams = function (data, parent) {
    var res = [];
    Object.entries(data).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var currentKey = getKey(key, parent);
        if (isArrayOrObject(value)) {
            res.push.apply(res, getParams(value, currentKey));
        }
        else {
            res.push(currentKey + "=" + value);
        }
    });
    return res;
};
var queryStringify = function (data) {
    if (typeof data !== 'object') {
        throw new Error('input must be an object');
    }
    return getParams(data).join('&');
};
exports["default"] = queryStringify;
// рефакторить (см. теорию)
var obj = {
    key: 1,
    key2: 'test',
    key3: false,
    key4: true,
    key5: [1, 2, 3],
    key6: { a: 1 },
    key7: { b: { d: 2 } }
};
console.log(queryStringify(obj));
// 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'
