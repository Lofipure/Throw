"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const wx_server_sdk_1 = __importDefault(require("wx-server-sdk"));
wx_server_sdk_1.default.init({
    env: wx_server_sdk_1.default.DYNAMIC_CURRENT_ENV,
});
const db = wx_server_sdk_1.default.database();
const main = (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const result = (_b = (_a = ((yield db
            .collection("comments")
            .where({
            drink_id: params.drinkId,
        })
            .get()))) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : [];
        return {
            code: 1,
            data: result,
        };
    }
    catch (e) {
        return {
            code: 0,
        };
    }
});
exports.main = main;
