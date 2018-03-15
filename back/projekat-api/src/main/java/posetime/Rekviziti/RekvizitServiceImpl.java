package posetime.Rekviziti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RekvizitServiceImpl implements RekvizitService {
    @Autowired
    private RekvizitRepository rekvizitRepository;

    @Override
    public List<TematskiRekvizit> findAll() {
        List<TematskiRekvizit> rekviziti = this.rekvizitRepository.findAll();
        return rekviziti;
    }

    @Override
    public TematskiRekvizit findOne(String id) {
        TematskiRekvizit rekvizit = this.rekvizitRepository.findOne(id);
        return rekvizit;
    }

    @Override
    public TematskiRekvizit create(TematskiRekvizit rekvizit) throws Exception {
        TematskiRekvizit savedRekvizit = this.rekvizitRepository.insert(rekvizit);
        return savedRekvizit;
    }

    @Override
    public TematskiRekvizit update(TematskiRekvizit rekvizit) throws Exception {
        TematskiRekvizit rekvizitToUpdate = this.rekvizitRepository.findOne(rekvizit.getId());
        if(rekvizitToUpdate == null){
            throw new Exception("Trazeni entitet nije pronadjen!");
        }

        rekvizitToUpdate.setCena(rekvizit.getCena());
        rekvizitToUpdate.setIme(rekvizit.getIme());
        rekvizitToUpdate.setOpis(rekvizit.getOpis());
        rekvizitToUpdate.setRezervisan(rekvizit.isRezervisan());
        rekvizitToUpdate.setImgLocation(rekvizit.getImgLocation());
        TematskiRekvizit updatedRekvizit = this.rekvizitRepository.save(rekvizitToUpdate);
        return updatedRekvizit;
    }

    @Override
    public void delete(String id) {
        this.rekvizitRepository.delete(id);
    }
}
