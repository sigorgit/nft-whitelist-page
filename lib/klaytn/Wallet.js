"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const ConnectWalletPopup_1 = __importDefault(require("../component/ConnectWalletPopup"));
const Klip_1 = __importDefault(require("./Klip"));
class Wallet extends eventcontainer_1.default {
    constructor() {
        super();
        this.checkConnected();
        Klip_1.default.toss("connect", this);
    }
    async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }
    async loadAddress() {
        return Klip_1.default.address;
    }
    async connected() {
        return await this.loadAddress() !== undefined;
    }
    async connect() {
        return new Promise((resolve) => new ConnectWalletPopup_1.default(resolve));
    }
}
exports.default = new Wallet();
//# sourceMappingURL=Wallet.js.map