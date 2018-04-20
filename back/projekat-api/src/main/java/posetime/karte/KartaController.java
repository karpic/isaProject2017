package posetime.karte;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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


    @RequestMapping(
            method = RequestMethod.POST,
            value = "/karte",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Karta> insertKarta(@RequestBody Karta karte) throws Exception{
        Karta createdKarta  = this.kartaService.create(karte);
        return new ResponseEntity<Karta>(createdKarta, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/karte/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Karta> updateKarta(@PathVariable("id") String id, @RequestBody Karta karta) throws Exception{
        Karta karte = this.kartaService.findOne(id);

        if(karte == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Karta updateKarta = this.kartaService.update(karta);
        if (updateKarta == null) {
            return new ResponseEntity<Karta>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updateKarta, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/karte/{id}"
    )
    public ResponseEntity<Karta> deleteFilm(@PathVariable("id") String id){
        this.kartaService.delete(id);
        return new ResponseEntity<Karta>(HttpStatus.NO_CONTENT);
    }
}
