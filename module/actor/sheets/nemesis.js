import MutantChroniclesActorSheet from "./base.js";

export default class MutantChroniclesNemesisSheet extends MutantChroniclesActorSheet{

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 720,
            height: 440,
            classes: ["mutantchronicles", "sheet", "actor", "nemesis"]            
        });
    }
    
    getData() {
        const data = super.getData();        
        return data;
    }
}