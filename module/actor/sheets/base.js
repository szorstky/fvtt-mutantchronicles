export default class MutantChroniclesActorSheet extends ActorSheet{

    constructor(...args) {
        super(...args);
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {            
            classes: ["mutantchronicles", "sheet", "actor"]
        });
    }
    /** @override */
    get template(){
        return `systems/mutantchronicles/templates/actors/${this.actor.data.type}-sheet.html`;
    }

    /** @override */
    getData(options) {
        // Basic data
        let isOwner = this.actor.isOwner;
        const data = {
            owner: isOwner,
            limited: this.actor.limited,
            options: this.options,
            editable: this.isEditable,
            cssClass: isOwner ? "editable" : "locked",
            isPlayer: this.actor.type === "player",
            isNPC: this.actor.type === "npc",
            isNemesis: this.actor.type === 'nemesis',
            isEnemy: this.actor.type === 'enemy',
            config: CONFIG.mutantchronicles,
            rollData: this.actor.getRollData.bind(this.actor)
        };

        const actorData = this.actor.data.toObject(false);
        data.actor = actorData;
        data.data = actorData.data;        
        
        return data;
    }
}