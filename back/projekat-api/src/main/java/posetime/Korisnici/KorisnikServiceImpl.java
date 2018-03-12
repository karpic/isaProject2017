package posetime.Korisnici;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorisnikServiceImpl implements KorisnikService {

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Override
    public List<Korisnik> findAll() {
        return korisnikRepository.findAll();
    }

    @Override
    public Korisnik findOne(String id) {
        return korisnikRepository.findOne(id);
    }

    @Override
    public Korisnik findByEmail(String email) {
        List<Korisnik> korisnici = korisnikRepository.findAll();

        for(Korisnik k : korisnici) {
            if(k.getEmail().equals(email)) {
                return k;
            }
        }
        return null;
    }

    @Override
    public Korisnik insert(Korisnik k) {
        return korisnikRepository.insert(k);
    }
}
