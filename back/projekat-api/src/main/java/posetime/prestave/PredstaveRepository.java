package posetime.prestave;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PredstaveRepository extends MongoRepository<Predstave,String> {
}
