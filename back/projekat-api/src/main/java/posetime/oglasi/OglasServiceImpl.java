package posetime.oglasi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OglasServiceImpl implements OglasService {
    @Autowired
    private OglasiRepository oglasiRepository;

    @Override
    public List<Oglas> findAll() {
        List<Oglas> oglasi = this.oglasiRepository.findAll();
        return oglasi;
    }

    @Override
    public Oglas findOne(String id) {
        Oglas oglas = this.oglasiRepository.findOne(id);
        return oglas;
    }

    @Override
    public Oglas create(Oglas oglas) throws Exception {
        Oglas savedOglas = this.oglasiRepository.insert(oglas);
        return savedOglas;
    }

    @Override
    public Oglas update(Oglas oglas) throws Exception {
        Oglas oglasToUpdate = this.oglasiRepository.findOne(oglas.getId());
        if(oglasToUpdate == null){
            throw new Exception("Trazeni entitet nije pronadjen!");
        }

        oglasToUpdate.setNaziv(oglas.getNaziv());
        oglasToUpdate.setOpis(oglas.getOpis());
        oglasToUpdate.setDatum(oglas.getDatum());
        oglasToUpdate.setOdobren(oglas.isOdobren());
        oglasToUpdate.setOwnerUserName(oglas.getOwnerUserName());
        oglasToUpdate.setImgPath(oglas.getImgPath());

        Oglas updatedOglas = this.oglasiRepository.save(oglasToUpdate);
        return updatedOglas;
    }

    @Override
    public void delete(String id) {
        this.oglasiRepository.delete(id);
    }
}
