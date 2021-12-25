"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TteokmillSparrowsWhitelist_json_1 = __importDefault(require("./abi/artifacts/contracts/TteokmillSparrowsWhitelist.sol/TteokmillSparrowsWhitelist.json"));
const Contract_1 = __importDefault(require("./Contract"));
class TteokmillSparrowsWhitelistContract extends Contract_1.default {
    constructor() {
        super("0xE981EE65705610D49327B375142110f2Dcada814", TteokmillSparrowsWhitelist_json_1.default.abi);
    }
    async added(addr) {
        return await this.runMethod("added", addr);
    }
    async add(addr) {
        await this.runWalletMethod("add", addr);
    }
}
exports.default = new TteokmillSparrowsWhitelistContract();
//# sourceMappingURL=TteokmillSparrowsWhitelistContract.js.map