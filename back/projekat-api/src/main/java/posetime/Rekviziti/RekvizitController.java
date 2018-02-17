package posetime.Rekviziti;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/prodavnica")
public class RekvizitController {

    @Autowired
    private RekvizitRepository rekvizitRepository;

    @RequestMapping(method= RequestMethod.GET)
    public List<TematskiRekvizit> getAll(){

        return this.rekvizitRepository.findAll();


    }
}

