package posetime.pozorista;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PozoristeRepository extends MongoRepository<Pozoriste,String>{
}
