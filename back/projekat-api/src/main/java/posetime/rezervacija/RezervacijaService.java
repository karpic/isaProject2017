package posetime.rezervacija;

import posetime.Korisnici.Korisnik;

import java.util.List;

public interface RezervacijaService {

    Rezervacija addRezervacija(Rezervacija r);
    Rezervacija update(Rezervacija r);
    List<Rezervacija> getByKorisnik(Korisnik k);
    void deleteRezervacija(Rezervacija r);

}
