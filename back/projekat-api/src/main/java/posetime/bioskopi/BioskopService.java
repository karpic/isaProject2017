package posetime.bioskopi;

import java.util.List;

public interface BioskopService {
    List<Bioskop> findAll();
    Bioskop findOne(String id);
    Bioskop create(Bioskop bioskop) throws Exception;
}
