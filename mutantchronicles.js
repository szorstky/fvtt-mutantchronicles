import { mutantchronicles } from "./module/config.js";
import MutantChroniclesItemSheet from "./module/sheets/mutant-chronicles-item-sheet.js";

Hooks.once("init", function(){
    console.log("mutantchronicles | Initializing Muntant Chronicles");

    webkitConvertPointFromPageToNode.mutantchronicles = mutantchronicles;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mutantchronicles", MutantChroniclesItemSheet, { makeDefault: true });
});