"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticFile = void 0;
const fs_1 = __importDefault(require("fs"));
const getStaticFile = (path) => {
    let res;
    fs_1.default.readFile(path, (err, data) => {
        if (err) {
            res = err;
        }
        else {
            res = data.toString();
        }
    });
    return res;
};
exports.getStaticFile = getStaticFile;
//# sourceMappingURL=staticFileSys.js.map