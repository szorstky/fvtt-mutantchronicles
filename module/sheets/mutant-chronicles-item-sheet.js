export default class MutantChroniclesItemSheet extends ItemSheet{
    get template(){
        return `system/mutantchronicles/templates/sheet/${this.item.data.type}-sheet.html`;
    }
}