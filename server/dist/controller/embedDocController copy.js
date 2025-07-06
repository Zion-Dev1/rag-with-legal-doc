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
const readDocService_1 = __importDefault(require("../services/readDocService"));
const textsplitters_1 = require("@langchain/textsplitters");
const createIds_1 = __importDefault(require("../utils/createIds"));
const embedDocController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { collection } = yield chromaCollection_1.default;
        if (!collection) {
            return res
                .status(500)
                .json({ error: "Error retrieving ChromaDB collection." });
        }
        const pdfText = yield (0, readDocService_1.default)();
        if (!pdfText) {
            return res.status(404).json({ error: "Document not found or empty." });
        }
        else {
            const splitter = new textsplitters_1.RecursiveCharacterTextSplitter({
                chunkSize: 1000,
                chunkOverlap: 200,
            });
            const output = yield splitter.splitText(pdfText);
            yield collection.add({ ids: (0, createIds_1.default)(output.length), documents: output });
        }
        return res.status(200).json({ msg: "Document embedded successfully." });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
});
exports.default = embedDocController;
