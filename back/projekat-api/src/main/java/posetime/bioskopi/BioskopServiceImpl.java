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


}
