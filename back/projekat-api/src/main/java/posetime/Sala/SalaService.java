package posetime.Sala;

import java.util.List;

public interface SalaService {
    List<Sala> findAll();
    Sala findOne(String id);
}
