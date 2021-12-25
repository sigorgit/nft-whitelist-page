import { DomNode, el, Popup } from "@hanul/skynode";
import Klip from "../klaytn/Klip";

export default class ConnectWalletPopup extends Popup {

    public content: DomNode;

    constructor(callback: () => void) {
        super(".popup-background");
        this.append(
            this.content = el(".connect-wallet-popup",
                el("h2", "클레이튼 지갑 연결"),
                el("p", "카카오톡 클립에서 연결해주시기 바랍니다."),
                el(".button-container",
                    el("button.connect-klip-button",
                        el("img", { src: "/images/icon/klip.svg" }),
                        "카카오톡 클립으로 연결",
                        {
                            click: async () => {
                                await Klip.connect();
                                callback();
                                this.delete();
                            },
                        },
                    ),
                    el("button.button.cancel-button", "연결하지 않고 둘러보기", {
                        click: () => this.delete(),
                    }),
                ),
            ),
        );
    }
}
