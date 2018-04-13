package posetime.karte;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class KartaServiceImpl implements  KartaService{

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

}
