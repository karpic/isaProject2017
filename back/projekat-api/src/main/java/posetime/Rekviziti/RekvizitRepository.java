package posetime.Rekviziti;

import com.mongodb.Mongo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

public interface RekvizitRepository extends MongoRepository<TematskiRekvizit, String> {

}
