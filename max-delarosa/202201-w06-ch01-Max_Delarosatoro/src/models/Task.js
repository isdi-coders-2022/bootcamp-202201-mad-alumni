export class TaskStructure {
    title;

    responsible;

    isCompleted;

    constructor(title, responsible) {
        this.title = title;
        this.responsible = responsible;
        this.isCompleted = false;
    }
}
