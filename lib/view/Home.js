"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Home {
    constructor() {
        this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("h1", "떡방앗간.느프트"), (0, skynode_1.el)("h2", "2021년 12월 28일"), (0, skynode_1.el)("h2", "☆개☆봉☆박☆두☆"), (0, skynode_1.el)("a", { href: "https://www.youtube.com/watch?v=bDFKiwtdBYs", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/comming-soon.svg", height: "256px" })), (0, skynode_1.el)(".overview", `참새들이 기다리고 기다리던 떡방앗간 NFT...\n가슴이 웅장해지는 그 NFT드디어 나온다.\n한 개 당 1천 절미다.\n1천 절미 없는 흑두루미 참새 없재?`), (0, skynode_1.el)(".input-container", (0, skynode_1.el)(".label", "🚨 카톡 클립은 본인 인증용으로 클립지갑으로 인절미를 절.대. 보내지 말 것 🚨"), (0, skynode_1.el)(".label", "🚨 클립주소 입력하면 화이트리스트 못 받음 그러니깐 카.이.카.스. 주소 입력 할 것🚨"), (0, skynode_1.el)("input", { placeholder: "카이카스 주소 입력하면 됨" })), (0, skynode_1.el)("button", "화이트 리스트 신청 허기"), (0, skynode_1.el)("button", "떡방앗간 V2 로오오드맵", {
            click: () => {
                window.open("https://medium.com/tteok/%EB%96%A1%EB%B0%A9%EC%95%97%EA%B0%84-%EB%A1%9C%EB%93%9C%EB%A7%B5-v2-8c8c13f9fc2b", '_blank');
            }
        }), (0, skynode_1.el)("button", "느프트 설명 더 보기", {
            click: () => {
                ViewUtil_1.default.go("/explanation");
            }
        }), (0, skynode_1.el)(".footer", (0, skynode_1.el)(".sns", (0, skynode_1.el)("a", { href: "https://twitter.com/tteokmill", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/icon/twitter.svg", height: "42px" })), (0, skynode_1.el)("a", { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/icon/discord.svg", height: "42px" })), (0, skynode_1.el)("a", { href: "https://open.kakao.com/o/g1nYzIHd", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/icon/kakaotalk.svg", height: "42px" }))), (0, skynode_1.el)("a", "떡방앗간.닷컴", { href: "https://tteok.org" }))).appendTo(skynode_1.BodyNode);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map