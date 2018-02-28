package posetime.ponude;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@CrossOrigin("*")
public class PonudeController {
    @Autowired
    private PonudeRepository ponudeRepository;

    @RequestMapping(method = RequestMethod.GET, value="/ponude")
    public List<Ponuda> getAll(){
        return this.ponudeRepository.findAll();
    }


}
