export class NoviRekvizit {
  constructor(
    public ime: string,
    public opis: string,
    public cena: number,
    public rezervisan: boolean,
    public imgLocation: string,
    public rezervisao: string
  ){}
}
