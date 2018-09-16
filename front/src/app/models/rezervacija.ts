import { Korisnik } from './korisnik';
export class Rezervacija {
  constructor(
    public id_ustanove: string,
    public id_dela: string,
    public id_projekcije: string,
    public broj_mesta: number,
    public termin: string,
    public sala: string,
    public id?: string,
    public korisnik?: Korisnik,
  ) {}
}
