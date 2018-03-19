package posetime.bioskopi;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BioskopRepository extends MongoRepository<Bioskop,String> {
}
