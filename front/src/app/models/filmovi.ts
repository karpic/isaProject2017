import {Sala} from "./sala"

export class Filmovi{
    constructor(
        public id:string,
        public naziv:string,
        public glumci:string,
        public zanr:string,
        public reditelj:string,
        public trajanje:string,
        public poster:string,
        public ocena:string,
        public opis:string,
        public sala:Array<Sala>,
        public termin:string,
        public cena:number,
    ){}
}