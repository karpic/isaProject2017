package posetime.oglasi;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OglasiRepository extends MongoRepository<Oglas, String> {
    List<Oglas> findByOdobren(boolean odobren);
    List<Oglas> findByStatus(int status);
    List<Oglas> findByAdminRec(String admin);
    List<Oglas> findByStatusAndAdminRec(int status, String adminRec);
}
