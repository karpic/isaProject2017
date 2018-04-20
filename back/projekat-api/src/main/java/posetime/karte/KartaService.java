package posetime.karte;
import java.util.List;

public interface KartaService {
    List<Karta> findAll();
    Karta findOne(String id);
    Karta create(Karta karta) throws Exception;
    Karta update(Karta karta) throws Exception;
    void delete(String id);
}
