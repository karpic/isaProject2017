package posetime.projekcije;

import java.util.List;

public interface ProjekcijaService {

    List<Projekcija> findAll();
    Projekcija findOne(String id);
    Projekcija create(Projekcija projekcija) throws Exception;
    Projekcija update(Projekcija projekcija) throws Exception;
    void delete(String id);
}
