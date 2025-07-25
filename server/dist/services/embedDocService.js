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
const openai_1 = __importDefault(require("openai"));
const embedDoc = (chunk) => __awaiter(void 0, void 0, void 0, function* () {
    const openai = new openai_1.default({
        apiKey: process.env.OPENAI_API_KEY,
    });
    try {
        const response = yield openai.embeddings.create({
            model: "text-embedding-3-small",
            input: chunk,
        });
        if (!response.data || response.data.length === 0) {
            throw new Error("No embedding data returned from OpenAI");
        }
        return response.data[0].embedding;
    }
    catch (err) {
        console.error("Error initializing OpenAI client:", err);
    }
});
exports.default = embedDoc;
