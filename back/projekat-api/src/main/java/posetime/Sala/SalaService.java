package posetime.Sala;

import java.util.List;

public interface SalaService {
    List<Sala> findAll();
    Sala findOne(String id);
    Sala create(Sala sala) throws Exception;
    Sala update(Sala sala) throws Exception;
    void delete(String id);
}
