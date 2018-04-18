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
}
