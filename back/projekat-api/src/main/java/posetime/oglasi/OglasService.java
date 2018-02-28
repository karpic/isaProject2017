package posetime.oglasi;

import java.util.List;

public interface OglasService {
    List<Oglas> findAll();
    Oglas findOne(String id);
    Oglas create(Oglas oglas) throws Exception;
    Oglas update(Oglas oglas) throws Exception;
    void delete(String id);
}
