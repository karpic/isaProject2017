package posetime.prestave;

import java.util.List;

public interface PredstaveService {
    List<Predstave> findAll();
    Predstave findOne(String id);
    Predstave create(Predstave predstava) throws Exception;
    Predstave update(Predstave predstava) throws Exception;
    void delete(String id);
}
