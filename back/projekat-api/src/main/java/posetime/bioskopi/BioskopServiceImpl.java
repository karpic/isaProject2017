package posetime.bioskopi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BioskopServiceImpl implements BioskopService {

    @Autowired
    private BioskopRepository bioskopRepository;

    @Override
    public List<Bioskop> findAll(){
        List<Bioskop> bioskop = this.bioskopRepository.findAll();
        return bioskop;
    }

    @Override
    public Bioskop findOne(String id){
        Bioskop bioskop = this.bioskopRepository.findOne(id);
        return bioskop;
    }

    @Override
    public Bioskop create(Bioskop bioskop) throws Exception {
        Bioskop savedBioskop = this.bioskopRepository.insert(bioskop);
        return savedBioskop;
    }

    @Override
    public Bioskop update(Bioskop bioskop) throws Exception {
        Bioskop bioskopUpdt = this.bioskopRepository.findOne(bioskop.getId());

        if(bioskopUpdt == null){
            throw new Exception("Nije pronadjen bioskop.");
        }
        bioskopUpdt.setId(bioskop.getId());
        bioskopUpdt.setNaziv(bioskop.getNaziv());
        bioskopUpdt.setAdresa(bioskop.getAdresa());
        bioskopUpdt.setOpis((bioskop.getOpis()));
        bioskopUpdt.setRepertoar(bioskop.getRepertoar());
        bioskopUpdt.setBrmesta(bioskop.getBrmesta());
        bioskopUpdt.setAdmin(bioskop.getAdmin());


        Bioskop updateBioskop = this.bioskopRepository.save(bioskopUpdt);
        return updateBioskop;
    }

    @Override
    public void delete(String id) {
        this.bioskopRepository.delete(id);
    }

}
