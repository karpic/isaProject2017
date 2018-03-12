package posetime.Korisnici;

import java.util.List;

public interface KorisnikService {
    List<Korisnik> findAll();
    Korisnik findOne(String id);
    Korisnik findByEmail(String email);
    Korisnik insert(Korisnik k);
}
