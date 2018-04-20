package posetime.karte;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class KartaServiceImpl implements KartaService{

    @Autowired
    private KartaRepository kartaRepository;


    @Override
    public List<Karta> findAll(){
        List<Karta> karta = this.kartaRepository.findAll();
        return karta;
    }

    @Override
    public Karta findOne(String id){
        Karta karta = this.kartaRepository.findOne(id);
        return karta;
    }

    @Override
    public Karta create(Karta karta) throws Exception {
        Karta savedKarta = this.kartaRepository.insert(karta);
        return savedKarta;

    }

    @Override
    public Karta update(Karta karta) throws Exception {
        Karta kartaUpdt = this.kartaRepository.findOne(karta.getId());

        if(kartaUpdt == null){
            throw new Exception("Nije pronadjena karta.");
        }

        kartaUpdt.setProjPred(karta.getProjPred());
        kartaUpdt.setDatum(karta.getDatum());
        kartaUpdt.setVreme((karta.getVreme()));
        kartaUpdt.setSala(karta.getSala());
        kartaUpdt.setBrSedista(karta.getBrSedista());
        kartaUpdt.setOriginalCena(karta.getOriginalCena());
        kartaUpdt.setPopustCena(karta.getPopustCena());


        Karta updateKarta = this.kartaRepository.save(kartaUpdt);
        return updateKarta;
    }

    @Override
    public void delete(String id) {
        this.kartaRepository.delete(id);
    }

}
