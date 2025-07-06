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
const queryDocService_1 = __importDefault(require("../services/queryDocService"));
const genResponseService_1 = __importDefault(require("../services/genResponseService"));
const genResponseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.body.query;
        if (typeof query !== "string" || query.trim() === "") {
            return res.status(400).json({ error: "Invalid query provided." });
        }
        const results = yield (0, queryDocService_1.default)(query);
        const context = results === null || results === void 0 ? void 0 : results.documents[0];
        const response = yield (0, genResponseService_1.default)(context, query);
        return res
            .status(200)
            .json({
            msg: "Response generated successfully.",
            results: response
        });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
});
exports.default = genResponseController;
