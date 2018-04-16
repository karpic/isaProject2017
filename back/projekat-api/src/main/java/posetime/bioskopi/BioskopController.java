package posetime.bioskopi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
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
            value ="/bioskopi/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Bioskop> getBioskop(@PathVariable ("id") String id) {
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

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/bioskopi/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Bioskop> updateBioskop(@PathVariable("id") String id, @RequestBody Bioskop bioskop) throws Exception{
        Bioskop bioskopi = this.bioskopService.findOne(id);

        if(bioskopi == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Bioskop updateBioskop = this.bioskopService.update(bioskop);
        if (updateBioskop == null) {
            return new ResponseEntity<Bioskop>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updateBioskop, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/bioskopi/{id}"
    )
    public ResponseEntity<Bioskop> deleteBioskop(@PathVariable("id") String id){
        this.bioskopService.delete(id);
        return new ResponseEntity<Bioskop>(HttpStatus.NO_CONTENT);
    }

}
