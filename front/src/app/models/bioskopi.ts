import { Filmovi } from "./filmovi";

export class Bioskopi {
    constructor (
        public id: string,
        public naziv: string,
        public adresa: string,
        public opis: string,
        public repertoar: Array<Filmovi>,
        public brmesta: string,
        public admin: String
    ) {}
}
