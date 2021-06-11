export default class MutantChroniclesItemSheet extends ItemSheet{
    get template(){
        return `systems/mutantchronicles/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}