import { ArrayType } from "@angular/compiler/src/output/output_ast";

export class Bioskopi {
    constructor (
        public id: string,
        public naziv: string,
        public adresa: string,
        public opis: string,
        public repertoar: ArrayType,
        public brmesta: ArrayType

    ){}
}