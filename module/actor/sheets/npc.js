import MutantChroniclesActorSheet from "./base.js";

export default class MutantChroniclesNpcSheet extends MutantChroniclesActorSheet{

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 720,
            height: 440,
            classes: ["mutantchronicles", "sheet", "actor", "npc"]            
        });
    }
    
    getData() {
        const data = super.getData();        
        return data;
    }
}