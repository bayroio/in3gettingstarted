"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var in3_1 = __importDefault(require("in3"));
//import web3 from 'web3'
// use the In3Client
var in3 = new in3_1.default({
    proof: 'standard',
    signatureCount: 1,
    requestCount: 2,
    chainId: 'kovan'
});
//const w3 = new web3(in3.createWeb3Provider())
function getLastBlock() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, in3.eth.getBlockByNumber('latest').then(function (res) {
                        console.log("--------------------------- getLastBlock ---------------------------");
                        console.log(res.hash);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getBlock(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, in3.eth.getBlockByHash(address).then(function (res) {
                        console.log("--------------------------- getBlock ---------------------------");
                        console.log(res);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function callFunction() {
    return __awaiter(this, void 0, void 0, function () {
        var contracttAddress, accountAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contracttAddress = "0xb79ea29fb1ec8d28e190a1b9c723cb519426dda0";
                    accountAddress = "0xb99E064b0f7Ba04bb32C9632553aAdF1C78b354b";
                    return [4 /*yield*/, in3.eth.callFn(contracttAddress, 'balanceOf(address):uint256', accountAddress).then(function (res) {
                            console.log("--------------------------- callFunction ---------------------------");
                            console.log(res);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function callTransaction() {
    return __awaiter(this, void 0, void 0, function () {
        var contractAddress, accountAddress, myPrivateKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contractAddress = "0xb79ea29fb1ec8d28e190a1b9c723cb519426dda0";
                    accountAddress = "0xb99E064b0f7Ba04bb32C9632553aAdF1C78b354b";
                    myPrivateKey = "0x4542265184AA6A1A941B2CA4D97B43B52E9B4D978FA03721177E7FDFA696AFC0";
                    return [4 /*yield*/, in3.eth.sendTransaction({
                            to: contractAddress,
                            method: 'setValue(uint256)',
                            args: [1],
                            //confirmations: 2,
                            pk: myPrivateKey
                        }).then(function (res) {
                            console.log("--------------------------- callTransaction ---------------------------");
                            console.log(res);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
getLastBlock();
getBlock("0xebf3091cf992aab5dcd351dc96523b1a6038d4d63704e9409a0283ebb275a3c4");
callFunction();
callTransaction();
