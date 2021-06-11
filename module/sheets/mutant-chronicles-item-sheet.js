export default class MutantChroniclesItemSheet extends ItemSheet{
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