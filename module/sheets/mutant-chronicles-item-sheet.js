export default class MutantChroniclesItemSheet extends ItemSheet{

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 520,
            height: 340,
            classess: ["mutantchronicles", "sheet", "item"]
        });
    }

    get template(){
        return `systems/mutantchronicles/templates/sheets/${this.item.data.type}-sheet.html`;
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