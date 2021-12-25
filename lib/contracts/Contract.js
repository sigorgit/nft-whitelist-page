"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const ConnectWalletPopup_1 = __importDefault(require("../component/ConnectWalletPopup"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Klip_1 = __importDefault(require("../klaytn/Klip"));
class Contract extends eventcontainer_1.default {
    constructor(address, abi) {
        super();
        this.address = address;
        this.abi = abi;
        this.contract = Klaytn_1.default.createContract(address, abi);
    }
    findMethodABI(name) {
        return this.abi.filter((abi) => abi.name === name && abi.type === "function")[0];
    }
    async runMethod(methodName, ...params) {
        return await this.contract.methods[methodName](...params).call();
    }
    async runWalletMethodWithGas(methodName, gas, ...params) {
        if (Klip_1.default.connected === true) {
            await Klip_1.default.runContractMethod(this.address, this.findMethodABI(methodName), params);
        }
        else {
            return new Promise((resolve) => new ConnectWalletPopup_1.default(resolve));
        }
    }
    async runWalletMethod(methodName, ...params) {
        return this.runWalletMethodWithGas(methodName, 1500000, ...params);
    }
    async runWalletMethodWithLargeGas(methodName, ...params) {
        return this.runWalletMethodWithGas(methodName, 20000000, ...params);
    }
    async runWalletMethodWithValue(value, methodName, ...params) {
        if (Klip_1.default.connected === true) {
            await Klip_1.default.runContractMethod(this.address, this.findMethodABI(methodName), params, value.toString());
        }
        else {
            return new Promise((resolve) => new ConnectWalletPopup_1.default(resolve));
        }
    }
}
exports.default = Contract;
//# sourceMappingURL=Contract.js.map