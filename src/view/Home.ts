import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import TteokmillSparrowsWhitelistContract from "../contracts/TteokmillSparrowsWhitelistContract";
import Wallet from "../klaytn/Wallet";
import ViewUtil from "./ViewUtil";


export default class Home implements View {

    private container: DomNode;
    private interval: any;

    private addrInput: DomNode<HTMLInputElement>;

    constructor() {
        this.container = el(".home-view",
            el("h1", "떡방앗간 참새 NFT 화이트리스팅"),
            el("h2", "2021년 12월 28일"),
            el("h2", "☆개☆봉☆박☆두☆"),
            el("a", { href: "https://www.youtube.com/watch?v=bDFKiwtdBYs", target: "_blank" }, el("img", { src: "/images/comming-soon.svg", height: "256px" })),
            el(".overview", `참새들이 기다리고 기다리던 떡방앗간 참새 NFT...\n가슴이 웅장해지는 그 NFT드디어 나온다.\n개 당 1,000 절미~!`),
            el(".input-container",
                el(".label", "🚨 카톡 클립은 본인 인증용으로 클립지갑으로 인절미를 절.대. 보내지 말 것 🚨"),
                el(".label", "🚨 클립주소 입력하면 화이트리스트 못 받음 그러니깐 카.이.카.스. 주소 입력 할 것🚨"),
                this.addrInput = el("input", { placeholder: "카이카스 주소 입력하면 됨" })),
            el("button", "화이트 리스트 신청 허기", {
                click: async () => {
                    if (await Wallet.connected() !== true) {
                        await Wallet.connect();
                    }
                    const addr = await Wallet.loadAddress();
                    if (addr !== undefined) {
                        if (await TteokmillSparrowsWhitelistContract.added(addr) === true) {
                            alert("이미 신청함");
                        } else {
                            if (confirm(`${this.addrInput.domElement.value} 이거 맞지? 틀리면 못사`)) {
                                await TteokmillSparrowsWhitelistContract.add(this.addrInput.domElement.value);
                                alert("완료");
                            }
                        }
                    }
                },
            }),
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