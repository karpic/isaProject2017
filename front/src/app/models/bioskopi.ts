export class Bioskopi {
    constructor (
        public id: string,
        public naziv: string,
        public adresa: string,
        public opis: string,
        public repertoar: Array<string>,
        public brmesta: string,
        public admin: String
    ) {}
}
