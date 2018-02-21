package posetime.oglasi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class OglasiController {

    @Autowired
    private OglasiRepository oglasiRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/oglasi")
    public List<Oglas> getAll(){
        return this.oglasiRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/oglasi")
    public void insertOglas(@RequestBody Oglas oglas){
        this.oglasiRepository.insert(oglas);
    }
}
