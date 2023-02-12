import { routing } from "./routes/index.js";
import * as uiElements from "./templates/index.js";
import { clearStorage } from "./storage/index.js";

clearStorage();
routing();

function createUI() {
    uiElements.navTemplate();
    uiElements.headerTemplate();
    uiElements.footerTemplate();
}

createUI();