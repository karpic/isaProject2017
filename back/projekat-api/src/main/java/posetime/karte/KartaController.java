package posetime.karte;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class KartaController {


    @Autowired
    private KartaService kartaService;

    public KartaController(KartaService kartaService) {
        this.kartaService = kartaService;
    }
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/karte",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Karta>> getAll() {
        List<Karta> karte = this.kartaService.findAll();
        return new ResponseEntity<List<Karta>>(karte, HttpStatus.OK);
    }


    @RequestMapping(
            method = RequestMethod.GET,
            value ="/karte/{id]",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Karta> getKarta(@PathVariable ("id") String id) {
        Karta karta = this.kartaService.findOne(id);
        if(karta == null){
            return new ResponseEntity<Karta>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Karta>(karta, HttpStatus.OK);
    }

}
