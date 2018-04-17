package posetime.filmovi;

import java.util.List;

public interface FilmoviService {
    List<Filmovi> findAll();
    Filmovi findOne(String id);
    Filmovi create(Filmovi film) throws Exception;
    Filmovi update(Filmovi film) throws Exception;
    void delete(String id);
}
