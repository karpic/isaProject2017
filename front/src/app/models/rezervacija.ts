import { Korisnik } from './korisnik';
export class Rezervacija {
  constructor(
    public id: string,
    public id_ustanove: string,
    public korisnik: Korisnik,
    public br_mesta: number,
    public termin: string,
    public sala: string,
  ) {}
}
