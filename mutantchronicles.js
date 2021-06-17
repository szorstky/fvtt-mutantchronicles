import { mutantchronicles } from "./module/config.js";
import { preloadHandlebarsTemplates } from "./module/templates.js";
import MutantChroniclesItemSheet from "./module/sheets/mc-item-sheet.js";
import MutantChroniclesPlayerSheet from "./module/actor/sheets/player.js";

Hooks.once("init", function(){
    console.log("mutantchronicles | Initializing Muntant Chronicles");

    CONFIG.mutantchronicles = mutantchronicles;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mutantchronicles", MutantChroniclesItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("mutantchronicles", MutantChroniclesPlayerSheet, { makeDefault: true });

    preloadHandlebarsTemplates();

    Handlebars.registerHelper("times", function(n, content){
        let result = "";
        for (let i=0; i < n; i++) {
            result += content.fn(i);
        }
        return result;
    });
});