import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import ViewUtil from "./ViewUtil";


export default class Home implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        this.container = el(".home-view",
            el("h1", "떡방앗간.느프트"),
            el("h2", "2021년 12월 28일"),
            el("h2", "☆개☆봉☆박☆두☆"),
            el("a", { href: "https://www.youtube.com/watch?v=bDFKiwtdBYs" }, el("img", { src: "/images/comming-soon.svg", height: "256px" })),
            el(".overview", `참새들이 기다리고 기다리던 떡방앗간 NFT...\n가슴이 웅장해지는 그 NFT드디어 나온다.\n한 개 당 1천 절미다.\n1천 절미 없는 흑두루미 참새 없재?`),
            el("input", { placeholder: "클립 주소 입력하면 됨" }),
            el("button", "화이트 리스트 신청 허기"),
            el("button", "떡방앗간 V2 로오오드맵", {
                click: () => {
                    window.open("https://medium.com/tteok/%EB%96%A1%EB%B0%A9%EC%95%97%EA%B0%84-%EB%A1%9C%EB%93%9C%EB%A7%B5-v2-8c8c13f9fc2b", '_blank');
                }
            }),
            el("button", "느프트 설명 더 보기", {
                click: () => {
                    ViewUtil.go("/explanation")
                }
            }),
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