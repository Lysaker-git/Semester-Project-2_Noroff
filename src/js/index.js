import { routing } from "./routes/index.js";
import * as uiElements from "./templates/index.js";
import { clearStorage } from "./storage/index.js";
import { FULL_REG_URL } from "./constants/url.js";

clearStorage();
routing();

function createUI() {
    uiElements.headerTemplate();
    uiElements.footerTemplate();
}

createUI();