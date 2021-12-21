import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";


export default class Explanation implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        this.container = el(".explanation-view", el("h1", "떡방앗간.느프트"),
            el("h2", "민팅가"),
            el(".body", "1,000 인절미 a.k.a 1천 절미"),
            el("h2", "총 느프트 갯수"),
            el(".body", "10,000 개 a.k.a 1만개"),
            el("h2", "민팅 시간"),
            el(".body", `2021년 12월 28일 저녁쯤\n(정확한 시간은 공지 예정)`),
            el("h2", "2차 거래소"),
            el("a", "klu.bs", { href: "https://klu.bs", target: "_blank" }),
            el(".body", "클럽스 거래 수수료는 느트프 보유자가 받아감"),
            el("h2", "보유자 혜택"),
            el(".body", "💰 하드포크 이후 인절미 느프트 하나당 1천 절미 스테이킹과 같음 💰"),
            el(".body", "💸 절미+클레이+곳간의 메이트에서 나오는 믹스 수령 가능 💸"),
            el(".body", "🚜 시고르 입장권으로 사용 🚜"),
            el(".body", "🏡 느프트 홀더에게 시고르 집 한채 줌 🏡"),
            el("h2", "주의사항"),
            el(".body", "구입은 카이사스의 인절미로 사용함"),
            el(".body", "카톡 클립은 본인 인증용으로 클립지갑으로 인절미를 절.대. 보내지 말 것"),
            el(".body", "클립은 다계정 방지를 위한 인증에만 쓰임"),
            el(".body", "자세한 일정은 트위터 참고"),
            el(".footer", el(".sns",
                el("a", { href: "https://twitter.com/tteokmill", target: "_blank" }, el("img", { src: "/images/icon/twitter.svg", height: "42px" })),
                el("a", { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }, el("img", { src: "/images/icon/discord.svg", height: "42px" })),
                el("a", { href: "https://open.kakao.com/o/g1nYzIHd", target: "_blank" }, el("img", { src: "/images/icon/kakaotalk.svg", height: "42px" })),
            ), el("a", "떡방앗간.닷컴", { href: "https://tteok.org" }))
        ).appendTo(BodyNode);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}