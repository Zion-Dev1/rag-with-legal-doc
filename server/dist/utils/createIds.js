"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createIds = (length) => {
    const ids = [];
    for (let i = 0; i < length; i++) {
        ids.push(`id${i + 1}`);
    }
    return ids;
};
exports.default = createIds;
