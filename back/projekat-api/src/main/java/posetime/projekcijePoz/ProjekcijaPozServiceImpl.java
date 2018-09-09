package posetime.projekcijePoz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjekcijaPozServiceImpl implements ProjekcijaPozService{


    @Autowired
    private ProjekcijaPozrepository projekcijaPozrepository;


    @Override
    public List<ProjekcijaPoz> findAll(){
        List<ProjekcijaPoz> karta = this.projekcijaPozrepository.findAll();
        return karta;
    }

    @Override
    public ProjekcijaPoz findOne(String id){
        ProjekcijaPoz karta = this.projekcijaPozrepository.findOne(id);
        return karta;
    }

    @Override
    public ProjekcijaPoz create(ProjekcijaPoz karta) throws Exception {
        ProjekcijaPoz savedKarta = this.projekcijaPozrepository.insert(karta);

        return savedKarta;

    }

    @Override
    public ProjekcijaPoz update(ProjekcijaPoz karta) throws Exception {
        ProjekcijaPoz kartaUpdt = this.projekcijaPozrepository.findOne(karta.getId());

        if(kartaUpdt == null){
            throw new Exception("Nije pronadjena projekcija.");
        }
        kartaUpdt.setSala(karta.getSala());
        kartaUpdt.setBr_mesta(karta.getBr_mesta());
        kartaUpdt.setTermin(karta.getTermin());



        ProjekcijaPoz updateKarta = this.projekcijaPozrepository.save(kartaUpdt);
        return updateKarta;
    }

    @Override
    public void delete(String id) {
        this.projekcijaPozrepository.delete(id);
    }

}
