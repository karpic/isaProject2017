export class LoggedInUser {
  constructor(
    public email: string,
    public ime: string,
    public prezime: string,
    public brtel: string,
    public grad: string,
    public roles: Array<String>,
    public prijatelji: Array<String>,
    public zahtevi: Array<String>,
    public ponude: Array<String>,
    public obavestenja: Array<String>
  ) {}
}
