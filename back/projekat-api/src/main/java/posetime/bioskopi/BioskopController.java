package posetime.bioskopi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BioskopController {

    @Autowired
    private BioskopService bioskopService;

    public BioskopController(BioskopService bioskopService) {
        this.bioskopService = bioskopService;
    }
    @RequestMapping(
            method = RequestMethod.GET,
            value ="/bioskopi",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Bioskop>> getAll() {
        List<Bioskop> bioskopi = this.bioskopService.findAll();
        return new ResponseEntity<List<Bioskop>>(bioskopi, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value ="/bioskopi/{id]",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Bioskop> geBioskopi(@PathVariable ("id") String id) {
        Bioskop bioskopi = this.bioskopService.findOne(id);
        if(bioskopi == null){
            return new ResponseEntity<Bioskop>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Bioskop>(bioskopi, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/bioskopi",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Bioskop> insertBioskop(@RequestBody Bioskop bioskop) throws Exception{
        Bioskop createdBioskop  = this.bioskopService.create(bioskop);
        return new ResponseEntity<Bioskop>(createdBioskop, HttpStatus.CREATED);
    }

}
