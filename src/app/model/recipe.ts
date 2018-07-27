export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    public title: string;
    public description: string;
    public ingredient: Ingredient[];
    public instruction: Instruction[];
    public cover_photo: string;

    constructor(t: string, d: string, ingr: Ingredient[], instr: Instruction[], cp: string) {
        this.title = t;
        this.description = d;
        this.ingredient = ingr;
        this.instruction = instr;
        this.cover_photo = cp;
    }
}