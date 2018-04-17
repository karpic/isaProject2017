package posetime.prestave;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PredstaveServiceImpl implements PredstaveService{

    @Autowired
    private PredstaveRepository predstaveRepository;

    @Override
    public List<Predstave> findAll(){
        List<Predstave> predstava = this.predstaveRepository.findAll();
        return predstava;
    }

    @Override
    public Predstave findOne(String id){
        Predstave predstava = this.predstaveRepository.findOne(id);
        return predstava;
    }

    @Override
    public Predstave create(Predstave predstava) throws Exception {
        Predstave savedPredstava = this.predstaveRepository.insert(predstava);
        return savedPredstava;

    }

    @Override
    public Predstave update(Predstave predstava) throws Exception {
        Predstave predstavaUpdt = this.predstaveRepository.findOne(predstava.getId());

        if(predstavaUpdt == null){
            throw new Exception("Nije pronadjena predstava.");
        }

        predstavaUpdt.setNaziv(predstava.getNaziv());
        predstavaUpdt.setGlumci(predstava.getGlumci());
        predstavaUpdt.setOpis((predstava.getOpis()));
        predstavaUpdt.setZanr(predstava.getZanr());
        predstavaUpdt.setReditelj(predstava.getReditelj());
        predstavaUpdt.setTrajanje(predstava.getTrajanje());
        predstavaUpdt.setPoster(predstava.getPoster());
        predstavaUpdt.setOcena(predstava.getOcena());
        predstavaUpdt.setOpis(predstava.getOpis());
        predstavaUpdt.setSala(predstava.getSala());
        predstavaUpdt.setTermin(predstava.getTermin());
        predstavaUpdt.setCena(predstava.getCena());

        Predstave updatePredstava = this.predstaveRepository.save(predstavaUpdt);
        return updatePredstava;
    }

    @Override
    public void delete(String id) {
        this.predstaveRepository.delete(id);
    }

}
