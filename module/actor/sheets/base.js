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
        return `systems/mutantchronicles/templates/actors/${this.actor.data.type}-sheet.html`;
    }

    /** @override */
    getData(options) {
        const data = super.getData(options);
        const actorData = data.data;

        data.config = CONFIG.mutantchronicles;
        data.actor = actorData;
        data.data = actorData.data;
        return data;
    }
}