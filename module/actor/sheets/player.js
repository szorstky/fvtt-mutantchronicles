import MutantChroniclesActorSheet from "./base.js";

export default class MutantChroniclesPlayerSheet extends MutantChroniclesActorSheet{

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 720,
            height: 440,
            classess: ["mutantchronicles", "sheet", "actor", "player"]            
        });
    }
    
    getData(options) {
        const data = super.getData(options);
        const actorData = data.data;

        data.config = CONFIG.mutantchronicles;
        data.actor = actorData;
        data.data = actorData.data;
        return data;
    }
}