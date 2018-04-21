package posetime.rezervacija;

import com.mongodb.Mongo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RezervacijaRepository extends MongoRepository<Rezervacija,String>{
}
