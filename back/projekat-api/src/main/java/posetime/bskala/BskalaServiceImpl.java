package posetime.bskala;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BskalaServiceImpl implements BskalaService{
    @Autowired
    private BskalaRepository bskalaRepository;

    @Override
    public List<BodovnaSkala> findAll() {
        List<BodovnaSkala> skale = this.bskalaRepository.findAll();
        return skale;
    }

    @Override
    public BodovnaSkala findOne(String id) {
        BodovnaSkala skala = this.bskalaRepository.findOne(id);
        return skala;
    }

    @Override
    public BodovnaSkala create(BodovnaSkala bodovnaSkala) throws Exception {
        BodovnaSkala savedSkala = this.bskalaRepository.insert(bodovnaSkala);
        return bodovnaSkala;
    }

    @Override
    public BodovnaSkala update(BodovnaSkala bodovnaSkala) throws Exception {
        BodovnaSkala bskalaToUpdate = this.bskalaRepository.findOne(bodovnaSkala.getId());
        if (bodovnaSkala == null) {
            throw new Exception("Bodovna skala nije pronadjena");
        }
        bskalaToUpdate.setBronzani(bodovnaSkala.getBronzani());
        bskalaToUpdate.setSrebrni(bodovnaSkala.getSrebrni());
        bskalaToUpdate.setZlatni(bodovnaSkala.getZlatni());

        BodovnaSkala updatedBodovnaSkala = this.bskalaRepository.save(bskalaToUpdate);
        return updatedBodovnaSkala;
    }

    @Override
    public void delete(String id) throws Exception {
        this.bskalaRepository.delete(id);
    }
}
