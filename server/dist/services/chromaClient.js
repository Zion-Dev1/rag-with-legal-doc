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
Object.defineProperty(exports, "__esModule", { value: true });
// chromaClient.js
const chromadb_1 = require("chromadb");
const client = new chromadb_1.ChromaClient();
const ready = (() => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield client.getOrCreateCollection({ name: "myc" });
    return { client, collection };
}))();
exports.default = ready;
