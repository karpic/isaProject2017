import { Predstave } from "./predstave";

export class Pozorista {
    constructor (
        public id: string,
        public naziv: string,
        public adresa: string,
        public opis: string,
        public repertoar: Array<Predstave>,
        public brmesta: Array<String>,
        public admin: String
    ){}
}
