import MutantChroniclesActorSheet from "./base";

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
        const itemData = data.data;

        data.config = CONFIG.mutantchronicles;
        data.item = itemData;
        data.data = itemData.data;
        return data;
    }
}