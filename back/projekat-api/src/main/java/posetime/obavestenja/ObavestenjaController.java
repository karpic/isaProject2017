package posetime.obavestenja;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ObavestenjaController {
    @Autowired
    private ObavestenjaService obavestenjaService;

    @RequestMapping(
            value = "/obavestenja",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Obavestenje>> getAll() {
        List<Obavestenje> obavestenja = this.obavestenjaService.findAll();
        return new ResponseEntity<List<Obavestenje>>(obavestenja, HttpStatus.OK);
    }

    @RequestMapping(
            value = "/obavestenja/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Obavestenje> getOne(@PathVariable("id") String id) {
        Obavestenje obavestenje = this.obavestenjaService.findOne(id);
        if (obavestenje != null) {
            return new ResponseEntity<Obavestenje>(obavestenje, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(
            value = "/obavestenja",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Obavestenje> insertObavestenje(@RequestBody Obavestenje obavestenje) throws Exception {
        Obavestenje createdObavestenje = this.obavestenjaService.create(obavestenje);
        return new ResponseEntity<Obavestenje>(createdObavestenje, HttpStatus.CREATED);

    }
}
