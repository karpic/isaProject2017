package posetime.obavestenja;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObavestenjaServiceImpl implements ObavestenjaService {
    @Autowired
    private ObavestenjaRepository obavestenjaRepository;

    @Override
    public List<Obavestenje> findAll() {
        List<Obavestenje> obavestenja = this.obavestenjaRepository.findAll();
        return obavestenja;
    }

    @Override
    public Obavestenje findOne(String id) {
        Obavestenje obavestenje = this.obavestenjaRepository.findOne(id);
        return obavestenje;
    }

    @Override
    public Obavestenje create(Obavestenje obavestenje) throws Exception{
        Obavestenje savedObavestenje = this.obavestenjaRepository.insert(obavestenje);
        return savedObavestenje;
    }

    @Override
    public Obavestenje update(Obavestenje obavestenje) throws Exception{
        Obavestenje obavestenjeToUpdate = this.obavestenjaRepository.findOne(obavestenje.getId());
        if(obavestenjeToUpdate == null){
            throw new Exception("Trazena ponuda nije pronadjena!");
        }

        obavestenjeToUpdate.setUsername(obavestenje.getUsername());
        obavestenjeToUpdate.setText(obavestenje.getText());

        Obavestenje updatedObavestenje = this.obavestenjaRepository.save(obavestenjeToUpdate);
        return updatedObavestenje;

    }

    @Override
    public void delete(String id) {

    }
}
