package posetime.filmovi;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmoviRepository extends MongoRepository<Filmovi,String> {
}
