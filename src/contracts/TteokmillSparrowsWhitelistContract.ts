import TteokmillSparrowsWhitelistArtifact from "./abi/artifacts/contracts/TteokmillSparrowsWhitelist.sol/TteokmillSparrowsWhitelist.json";
import Contract from "./Contract";

class TteokmillSparrowsWhitelistContract extends Contract {

    constructor() {
        super("", TteokmillSparrowsWhitelistArtifact.abi);
    }
}

export default new TteokmillSparrowsWhitelistContract();
