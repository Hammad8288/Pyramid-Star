"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
function pyramidStar(rows) {
    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}
const rowsInput = prompt('Enter the number of rows for the star pyramid: ');
const rows = parseInt(rowsInput);
if (isNaN(rows) || rows < 0) {
    console.log('Please enter a valid number');
}
else {
    pyramidStar(rows);
}
