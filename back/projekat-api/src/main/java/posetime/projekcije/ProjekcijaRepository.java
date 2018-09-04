package posetime.projekcije;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjekcijaRepository extends MongoRepository<Projekcija,String> {
}
