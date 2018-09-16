package posetime.projekcije;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjekcijaServiceImpl  implements ProjekcijaService{

    @Autowired
    private ProjekcijaRepository projekcijaRepository;


    @Override
    public List<Projekcija> findAll(){
        List<Projekcija> karta = this.projekcijaRepository.findAll();
        return karta;
    }

    @Override
    public Projekcija findOne(String id){
        Projekcija karta = this.projekcijaRepository.findOne(id);
        return karta;
    }

    @Override
    public Projekcija create(Projekcija karta) throws Exception {
        Projekcija savedKarta = this.projekcijaRepository.insert(karta);

        return savedKarta;

    }

    @Override
    public Projekcija update(Projekcija karta) throws Exception {
        Projekcija kartaUpdt = this.projekcijaRepository.findOne(karta.getId());

        if(kartaUpdt == null){
            throw new Exception("Nije pronadjena projekcija.");
        }
        kartaUpdt.setSala(karta.getSala());
        kartaUpdt.setBr_mesta(karta.isBr_mesta());
        kartaUpdt.setTermin(karta.getTermin());



        Projekcija updateKarta = this.projekcijaRepository.save(kartaUpdt);
        return updateKarta;
    }



    @Override
    public void delete(String id) {
        this.projekcijaRepository.delete(id);
    }

}
