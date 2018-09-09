package posetime.projekcijePoz;

import java.util.List;

public interface ProjekcijaPozService {

    List<ProjekcijaPoz> findAll();
    ProjekcijaPoz findOne(String id);
    ProjekcijaPoz create(ProjekcijaPoz projekcija) throws Exception;
    ProjekcijaPoz update(ProjekcijaPoz projekcija) throws Exception;
    void delete(String id);
}
