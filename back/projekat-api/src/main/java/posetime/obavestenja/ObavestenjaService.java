package posetime.obavestenja;

import java.util.List;

public interface ObavestenjaService {

    List<Obavestenje> findAll();
    Obavestenje findOne(String id);
    Obavestenje create(Obavestenje obavestenje) throws Exception;
    Obavestenje update(Obavestenje obavestenje) throws Exception;
    void delete(String id);
}
