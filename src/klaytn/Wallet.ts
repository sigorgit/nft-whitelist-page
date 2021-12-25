import EventContainer from "eventcontainer";
import ConnectWalletPopup from "../component/ConnectWalletPopup";
import Klip from "./Klip";

class Wallet extends EventContainer {

    constructor() {
        super();
        this.checkConnected();

        Klip.toss("connect", this);
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        return Klip.address;
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        return new Promise<void>((resolve) => new ConnectWalletPopup(resolve));
    }
}

export default new Wallet();
