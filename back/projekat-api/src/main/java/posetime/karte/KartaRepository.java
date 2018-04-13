package posetime.karte;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KartaRepository extends MongoRepository<Karta,String> {
}
