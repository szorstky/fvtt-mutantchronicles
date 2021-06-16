import { mutantchronicles } from "./module/config.js";
import { preloadHandlebarsTemplates } from "./module/templates.js";
import MutantChroniclesItemSheet from "./module/sheets/mutant-chronicles-item-sheet.js";
import MutantChroniclesActorSheet from "./module/sheets/mutant-chronicles-actor-sheet.js";

Hooks.once("init", function(){
    console.log("mutantchronicles | Initializing Muntant Chronicles");

    CONFIG.mutantchronicles = mutantchronicles;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mutantchronicles", MutantChroniclesItemSheet, { makeDefault: true });

    Items.unregisterSheet("core", ActorSheet);
    Items.registerSheet("mutantchronicles", MutantChroniclesActorSheet, { makeDefault: true });

    preloadHandlebarsTemplates();
});