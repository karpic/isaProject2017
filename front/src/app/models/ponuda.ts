export class Ponuda {
  constructor(
    public id: string,
    public userId: string,
    public username: string,
    public oglasId: string,
    public iznos: number,
    public izabrana: boolean
  ) { }
}
