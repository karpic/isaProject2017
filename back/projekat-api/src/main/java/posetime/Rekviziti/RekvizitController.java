package posetime.Rekviziti;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RekvizitController {

    @Autowired
    private RekvizitRepository rekvizitRepository;

    @RequestMapping(method=RequestMethod.GET, value="/rekviziti")
    public List<TematskiRekvizit> getAll(){

        return this.rekvizitRepository.findAll();


    }

    @RequestMapping(method = RequestMethod.POST, value="/rekviziti")
    public void insert(@RequestBody TematskiRekvizit rek){
        this.rekvizitRepository.insert(rek);
    }
}

