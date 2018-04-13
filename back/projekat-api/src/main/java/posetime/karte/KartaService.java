package posetime.karte;
import java.util.List;

public interface KartaService {
    List<Karta> findAll();
    Karta findOne(String id);
}
