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
const chromaClient_1 = __importDefault(require("./chromaClient"));
const openai_1 = require("@chroma-core/openai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ready = (() => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield chromaClient_1.default.getOrCreateCollection({
        name: "myc",
        embeddingFunction: new openai_1.OpenAIEmbeddingFunction({
            modelName: "text-embedding-3-small",
        }),
    });
    return { client: chromaClient_1.default, collection };
}))();
exports.default = ready;
