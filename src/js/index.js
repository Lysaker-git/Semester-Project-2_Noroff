import { routing } from "./routes/index.js";
import * as uiElements from "./templates/index.js";


routing();

function createUI() {
    uiElements.navTemplate();
    uiElements.headerTemplate();
    uiElements.footerTemplate();
}

createUI();