package posetime.ponude;

import java.util.List;

public interface PonudaService {

    List<Ponuda> findAll();
    Ponuda findOne(String id);
    Ponuda create(Ponuda ponuda) throws  Exception;
    Ponuda update(Ponuda ponuda) throws Exception;
    void delete(String id);
}
