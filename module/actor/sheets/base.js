export default class MutantChroniclesActorSheet extends ActorSheet{

    constructor(...args) {
        super(...args);
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {            
            classess: ["mutantchronicles", "sheet", "actor"]
        });
    }
    /** @override */
    get template(){
        return `systems/mutantchronicles/templates/actors/${this.item.data.type}-sheet.html`;
    }

    /** @override */
    getData(options) {
        const data = super.getData(options);
        const itemData = data.data;

        data.config = CONFIG.mutantchronicles;
        data.item = itemData;
        data.data = itemData.data;
        return data;
    }
}