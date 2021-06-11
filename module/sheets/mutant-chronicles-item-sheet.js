export default class MutantChroniclesItemSheet {
    get template(){
        return `system/mutantchronicles/templates/sheet/${this.item.data.type}-sheet.html`;
    }
}