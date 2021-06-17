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

        const actorData = this.actor.data.toObject(false);
        data.actor = actorData;
        data.data = actorData.data;        
        data.config = CONFIG.mutantchronicles;
        
        return data;
    }
}