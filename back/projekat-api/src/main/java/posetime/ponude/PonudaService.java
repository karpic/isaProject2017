package posetime.ponude;

import java.util.List;

public interface PonudaService {

    List<Ponuda> findAll();
    List<Ponuda> findByOglasId(String id);
    List<Ponuda> findByUserId(String id);
    List<Ponuda> findByUserName(String username);
    Ponuda findOne(String id);
    Ponuda create(Ponuda ponuda) throws  Exception;
    Ponuda update(Ponuda ponuda) throws Exception;
    void delete(String id);
    Ponuda reserve(Ponuda ponuda);
}
