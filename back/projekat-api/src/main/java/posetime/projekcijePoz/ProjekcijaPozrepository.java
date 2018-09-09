package posetime.projekcijePoz;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjekcijaPozrepository extends MongoRepository<ProjekcijaPoz,String> {
}
