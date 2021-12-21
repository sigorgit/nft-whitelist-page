import { SkyRouter } from "skyrouter";
import Home from "./view/Home";
import Explanation from './view/Explanation';

(async () => {

    SkyRouter.route("", Home);
    SkyRouter.route("explanation", Explanation);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();