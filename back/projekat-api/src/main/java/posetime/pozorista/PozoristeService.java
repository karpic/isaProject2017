package posetime.pozorista;
import java.util.List;

public interface PozoristeService {
    List<Pozoriste> findAll();
    Pozoriste findOne(String id);
    Pozoriste create(Pozoriste pozoriste) throws Exception;
    Pozoriste update(Pozoriste pozoriste) throws Exception;
    void delete (String id);
}
