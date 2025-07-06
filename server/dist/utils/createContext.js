"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createContext = (contextList) => {
    const newList = [];
    for (const context of contextList) {
        newList.push({
            role: 'assistant',
            content: context,
        });
    }
    return newList;
};
exports.default = createContext;
