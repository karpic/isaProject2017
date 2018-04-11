package posetime.bskala;

import java.util.List;

public interface BskalaService {
    List<BodovnaSkala> findAll();
    BodovnaSkala findOne(String id);
    BodovnaSkala create(BodovnaSkala bodovnaSkala) throws Exception;
    BodovnaSkala update(BodovnaSkala bodovnaSkala) throws Exception;
    void delete(String id) throws Exception;

}
