package posetime.Sala;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaServiceImpl implements SalaService {

    @Autowired
    private SalaRepository salaRepository;

    @Override
    public List<Sala> findAll(){
        List<Sala> sala = this.salaRepository.findAll();
        return sala;
    }

    @Override
    public Sala findOne(String id){
        Sala sala = this.salaRepository.findOne(id);
        return sala;
    }

    @Override
    public Sala create(Sala sala) throws Exception {
        Sala savedSala = this.salaRepository.insert(sala);
        return savedSala;
    }

    @Override
    public Sala update(Sala sala) throws Exception {
        Sala salaUpdt = this.salaRepository.findOne(sala.getId());


        if(salaUpdt == null){
            throw new Exception("Nije pronadjena sala.");
        }
        salaUpdt.setBrmesta(sala.getBrmesta());

        Sala updateSala = this.salaRepository.save(salaUpdt);
        return updateSala;
    }

    @Override
    public void delete(String id) {
        this.salaRepository.delete(id);
    }

}
