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
        return bioskopRepository.findAll();
    }
}
