package posetime.Korisnici;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KorisnikRepository extends MongoRepository<Korisnik,String>{


}
