package posetime.ponude;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PonudeRepository  extends MongoRepository<Ponuda, String>{
    List<Ponuda> findByOglasId(String id);
    List<Ponuda> findByUserId(String id);
}
