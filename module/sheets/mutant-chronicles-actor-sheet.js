export default class MutantChroniclesActorSheet extends ActorSheet{

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 520,
            height: 340,
            classess: ["mutantchronicles", "sheet", "mc-actor"],
            template: "systems/mutantchronicles/templates/sheets/mc-actor-sheet.html"
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