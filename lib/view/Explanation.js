"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Explanation {
    constructor() {
        this.container = (0, skynode_1.el)(".explanation-view", (0, skynode_1.el)("h1", "떡방앗간.느프트"), (0, skynode_1.el)("h2", "민팅가"), (0, skynode_1.el)(".body", "1,000 인절미 a.k.a 1천 절미"), (0, skynode_1.el)("h2", "총 느프트 갯수"), (0, skynode_1.el)(".body", "10,000 개 a.k.a 1만개"), (0, skynode_1.el)(".body", "(1인당 10개 구매제한)"), (0, skynode_1.el)("h2", "민팅 시간"), (0, skynode_1.el)(".body", "2021년 12월 28일 저녁쯤"), (0, skynode_1.el)(".body", "(정확한 시간은 공지 예정)"), (0, skynode_1.el)("h2", "2차 거래소"), (0, skynode_1.el)("a", "클럽스 a.k.a klu.bs", { href: "https://klu.bs", target: "_blank" }), (0, skynode_1.el)(".body", "클럽스 거래 수수료는 느트프 보유자가 받아감"), (0, skynode_1.el)("h2", "보유자 혜택"), (0, skynode_1.el)(".body", "💰 하드포크 이후 인절미 느프트 하나당 1천 절미 스테이킹과 같음 💰"), (0, skynode_1.el)(".body", "🍡 판매로 모인 1천만 절미는 느프트 보유자에게 평생 떡고물 배분 🍡"), (0, skynode_1.el)(".body", "💸 절미+클레이+곳간의 메이트에서 나오는 믹스 수령 가능 💸"), (0, skynode_1.el)(".body", "🚜 메타버스 시고르 입장권으로 사용 🚜"), (0, skynode_1.el)(".body", "🏡 느프트 홀더에게 시고르 집 한채 줌 🏡"), (0, skynode_1.el)("h2", "주의사항"), (0, skynode_1.el)(".body", "구입은 카이사스의 인절미로 사용함"), (0, skynode_1.el)(".body", "카톡 클립은 본인 인증용으로 클립지갑으로 인절미를 절.대. 보내지 말 것"), (0, skynode_1.el)(".body", "클립은 다계정 방지를 위한 인증에만 쓰임"), (0, skynode_1.el)(".body", "자세한 일정은 트위터 참고"), (0, skynode_1.el)("a", { href: "https://www.youtube.com/watch?v=UVK9jVAw5SY", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/comming-soon.svg", height: "256px" })), (0, skynode_1.el)(".footer", (0, skynode_1.el)(".sns", (0, skynode_1.el)("a", { href: "https://twitter.com/tteokmill", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/icon/twitter.svg", height: "42px" })), (0, skynode_1.el)("a", { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/icon/discord.svg", height: "42px" })), (0, skynode_1.el)("a", { href: "https://open.kakao.com/o/g1nYzIHd", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/icon/kakaotalk.svg", height: "42px" }))), (0, skynode_1.el)("a", "떡방앗간.닷컴", { href: "https://tteok.org" }))).appendTo(skynode_1.BodyNode);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Explanation;
//# sourceMappingURL=Explanation.js.map