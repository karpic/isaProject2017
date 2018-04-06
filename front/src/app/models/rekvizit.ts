export class Rekvizit {
  constructor(
    public id: string,
    public ime: string,
    public opis: string,
    public cena: number,
    public rezervisan: boolean,
    public imgLocation: string,
    public rezervisao: string
  ) { }

}
