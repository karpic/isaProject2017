package posetime.Korisnici;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class KorisnikController {
    private KorisnikRepository korisnikRepository;

    public KorisnikController(KorisnikRepository korisnikRepository) {
        this.korisnikRepository = korisnikRepository;
    }

    @RequestMapping("/korisnici")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Korisnik> getAll() {
        List<Korisnik> korisnici = korisnikRepository.findAll();
        return korisnici;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/korisnici")
    public void insert(@RequestBody Korisnik korisnik) {
        this.korisnikRepository.insert(korisnik);
    }
}
