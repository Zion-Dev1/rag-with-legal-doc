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
const createContext_1 = __importDefault(require("../utils/createContext"));
const genResponseService = (context, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new openai_1.default({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const contextList = (0, createContext_1.default)(context);
        const completion = yield client.chat.completions.create({
            model: "gpt-4.1",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that will use the provided context to answer questions about a legal case. The answers should be 2 to 5 sentences long. Try to make it as understable to a layman as possible",
                },
                ...contextList,
                {
                    role: "user",
                    content: query,
                },
            ],
            temperature: 0.7,
        });
        if (!completion.choices || completion.choices.length === 0) {
            throw new Error("No response from OpenAI API.");
        }
        return completion.choices[0].message.content;
    }
    catch (err) {
        throw new Error(`Response generation failed: ${err.message}`);
    }
});
exports.default = genResponseService;
