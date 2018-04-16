package posetime.pozorista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PozoristeServiceImpl implements PozoristeService {

    @Autowired
    private PozoristeRepository pozoristeRepository;

    @Override
    public List<Pozoriste> findAll() {
        List<Pozoriste> pozoriste = this.pozoristeRepository.findAll();
        return pozoriste;
    }

    @Override
    public Pozoriste findOne(String id) {
        Pozoriste pozoriste = this.pozoristeRepository.findOne(id);
        return pozoriste;
    }

    @Override
    public Pozoriste create(Pozoriste pozoriste) throws Exception {
        Pozoriste createdPozoriste = this.pozoristeRepository.insert(pozoriste);
        return createdPozoriste;
    }
    @Override
    public Pozoriste update(Pozoriste pozoriste) throws Exception {
        Pozoriste pozoristeUpdt = this.pozoristeRepository.findOne(pozoriste.getId());

        if(pozoristeUpdt == null) {
            throw new Exception("Nije pronadjeno pozoriste.");
        }
        pozoristeUpdt.setNaziv(pozoriste.getNaziv());
        pozoristeUpdt.setAdresa(pozoriste.getAdresa());
        pozoristeUpdt.setOpis((pozoriste.getOpis()));
        pozoristeUpdt.setRepertoar(pozoriste.getRepertoar());
        pozoristeUpdt.setBrmesta(pozoriste.getBrmesta());
        pozoristeUpdt.setAdmin(pozoriste.getAdmin());

        Pozoriste updatePozoriste = this.pozoristeRepository.save(pozoristeUpdt);
        return updatePozoriste;
    }

    @Override
    public void delete(String id) {
        this.pozoristeRepository.delete(id);
    }
}

