import { ArrayType } from "@angular/compiler/src/output/output_ast";

export class NoviBioskop {
    constructor (
        public naziv: string,
        public adresa: string,
        public opis: string,
        public repertoar: ArrayType,
        public brmesta: ArrayType

    ){}
}
