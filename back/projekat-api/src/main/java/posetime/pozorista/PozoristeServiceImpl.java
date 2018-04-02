package posetime.pozorista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PozoristeServiceImpl implements PozoristeService {

    @Autowired
    private PozoristeRepository pozoristeRepository;

    @Override
    public List<Pozoriste> findAll() {return pozoristeRepository.findAll();}

    @Override
    public Pozoriste create(Pozoriste pozoriste) throws Exception {
        Pozoriste createdPozoriste = this.pozoristeRepository.insert(pozoriste);
        return createdPozoriste;
    }
}

