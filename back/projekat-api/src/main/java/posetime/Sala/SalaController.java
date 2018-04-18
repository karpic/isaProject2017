package posetime.Sala;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class SalaController {

    @Autowired
    private SalaService salaService;

    public SalaController(SalaService salaService){this.salaService = salaService;}

    @RequestMapping(
            method = RequestMethod.GET,
            value ="/sale",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Sala>> getAll() {
        List<Sala> sale = this.salaService.findAll();
        return new ResponseEntity<List<Sala>>(sale, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value ="/sale/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Sala> getBioskop(@PathVariable("id") String id) {
        Sala sale = this.salaService.findOne(id);
        if(sale == null){
            return new ResponseEntity<Sala>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Sala>(sale, HttpStatus.OK);
    }
}
