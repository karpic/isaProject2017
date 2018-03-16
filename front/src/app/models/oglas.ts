export class Oglas {
  constructor(
    public id: String,
    public naziv: String,
    public opis: String,
    public datum: Date,
    public odobren: boolean,
    public ownerUserName: string,
    public imgPath: string
  ) { }
}
