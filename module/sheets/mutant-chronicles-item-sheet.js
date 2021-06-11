export default class MutantChroniclesItemSheet extends ItemSheet{
    get template(){
        return `system/mutantchronicles/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}