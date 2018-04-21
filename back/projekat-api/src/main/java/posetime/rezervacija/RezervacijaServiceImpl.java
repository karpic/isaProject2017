package posetime.rezervacija;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import posetime.Korisnici.Korisnik;
import posetime.Korisnici.KorisnikRepository;
import posetime.Korisnici.KorisnikService;

import java.util.List;

@Service(value = "repositoryService")
public class RezervacijaServiceImpl implements RezervacijaService {

    @Autowired
    private RezervacijaRepository rezervacijaRepository;

    @Autowired
    private KorisnikService korisnikService;


    @Override
    public Rezervacija addRezervacija(Rezervacija r) {
        Korisnik k =korisnikService.findByEmail(r.getKorisnik().getEmail());
        k.getRezervacije().add(r.getId());
        korisnikService.save(k);
        return rezervacijaRepository.insert(r);
    }

    @Override
    public Rezervacija update(Rezervacija r) {
        return rezervacijaRepository.save(r);
    }

    @Override
    public List<Rezervacija> getByKorisnik(Korisnik k) {
        List<Rezervacija> rezervacije = rezervacijaRepository.findAll();

        return null;
    }

    @Override
    public void deleteRezervacija(Rezervacija r) {
        rezervacijaRepository.delete(r);
    }
}
