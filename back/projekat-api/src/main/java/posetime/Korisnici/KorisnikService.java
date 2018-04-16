package posetime.Korisnici;

import java.util.List;

public interface KorisnikService {
    List<Korisnik> findAll();
    Korisnik findOne(String id);
    Korisnik findByEmail(String email);
    Korisnik findByConfirmationToken(String token);
    Korisnik save(Korisnik k);
    Korisnik insert(Korisnik k);
    List<Korisnik> findByName(String name);
    List<Korisnik> findBySurname(String surname);
    List<Korisnik> findByInfo(String name, String surname);
}
