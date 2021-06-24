import MutantChroniclesActorSheet from "./base.js";

export default class MutantChroniclesEnemySheet extends MutantChroniclesActorSheet{

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 720,
            height: 440,
            classes: ["mutantchronicles", "sheet", "actor", "enemy"]            
        });
    }
    
    getData() {
        const data = super.getData();        
        return data;
    }
}