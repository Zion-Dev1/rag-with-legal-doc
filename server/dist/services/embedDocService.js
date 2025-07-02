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
const path_1 = require("path");
const getDocService_1 = __importDefault(require("./getDocService"));
const embedDocService = (client) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield client.createCollection({ name: "myc" });
    const pdfPath = (0, path_1.join)(__dirname, "../../../data/biologynotes.pdf");
    yield (0, getDocService_1.default)(pdfPath);
    //   await collection.add({
    //     ids: ["id1", "id2"],
    //     documents: ["doc1", "doc2"],
    //   });
});
exports.default = embedDocService;
