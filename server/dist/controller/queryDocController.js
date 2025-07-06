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
const chromaCollection_1 = __importDefault(require("../chroma-db/chromaCollection"));
const queryDocController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { collection } = yield chromaCollection_1.default;
        if (!collection) {
            return res
                .status(500)
                .json({ err: "Error retrieving ChromaDB collection." });
        }
        const query = req.body.query;
        if (typeof query !== "string" || query.trim() === "") {
            return res.status(400).json({ err: "Invalid query provided." });
        }
        const results = yield collection.query({
            queryTexts: [query],
            nResults: 2,
        });
        return res
            .status(200)
            .json({ msg: "Document queried successfully.", results });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
});
exports.default = queryDocController;
