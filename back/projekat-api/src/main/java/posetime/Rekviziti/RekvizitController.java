package posetime.Rekviziti;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RekvizitController {

    @Autowired
    private RekvizitRepository rekvizitRepository;

    @RequestMapping(method=RequestMethod.GET, value="/rekviziti")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<TematskiRekvizit> getAll(){
        return this.rekvizitRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value="/rekviziti")
    @CrossOrigin(origins = "http://localhost:4200")
    public void insert(@RequestBody TematskiRekvizit rek){
        this.rekvizitRepository.insert(rek);
    }
}

