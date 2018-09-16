package posetime.rezervacija;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import posetime.Korisnici.Korisnik;
import posetime.Korisnici.KorisnikRepository;
import posetime.Korisnici.KorisnikService;

import java.util.ArrayList;
import java.util.List;

@Service(value = "repositoryService")
public class RezervacijaServiceImpl implements RezervacijaService {

    @Autowired
    private RezervacijaRepository rezervacijaRepository;

    @Autowired
    private KorisnikService korisnikService;


    @Override
    public Rezervacija addRezervacija(Rezervacija r) {

        return rezervacijaRepository.insert(r);
    }

    @Override
    public Rezervacija update(Rezervacija r) {
        return rezervacijaRepository.save(r);
    }

    @Override
    public List<Rezervacija> getByKorisnik(String email) {
        List<Rezervacija> rezervacije = rezervacijaRepository.findAll();
        List<Rezervacija> ret = new ArrayList<Rezervacija>();
        for(Rezervacija r: rezervacije) {
            if(r.getKorisnik().getEmail().equals(email)) {
                ret.add(r);
            }
        }
        return ret;
    }

    @Override
    public List<Rezervacija> getAll() {
        List<Rezervacija> rezervacije = rezervacijaRepository.findAll();
        return rezervacije;
    }

    @Override
    public void deleteRezervacija(Rezervacija r) {
        rezervacijaRepository.delete(r);
    }
}
