export class NoviOglas {
  constructor(
    public naziv: String,
    public opis: String,
    public datum: Date,
    public odobren: boolean,
    public ownerUserName: string,
    public imgPath: string,
    public status: number,
    public adminRec: String
  ) { }
}
