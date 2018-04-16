package posetime.bskala;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class BskalaController {
    @Autowired
    private BskalaService bskalaService;

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/skala",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<BodovnaSkala>> getAll(){
        List<BodovnaSkala> oglasi = this.bskalaService.findAll();
        return new ResponseEntity<List<BodovnaSkala>>(oglasi, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/skala",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<BodovnaSkala> insertSkala(@RequestBody BodovnaSkala bodovnaSkala) throws Exception{
        BodovnaSkala createdBodovnaSkala = this.bskalaService.create(bodovnaSkala);
        return new ResponseEntity<BodovnaSkala>(createdBodovnaSkala, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/skala/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<BodovnaSkala> updateSkala(@PathVariable("id") String id, @RequestBody BodovnaSkala bodovnaSkala) throws Exception{
        BodovnaSkala bskalaData = this.bskalaService.findOne(id);

        if(bskalaData == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        BodovnaSkala updatedSkala = this.bskalaService.update(bodovnaSkala);
        if (updatedSkala == null) {
            return new ResponseEntity<BodovnaSkala>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updatedSkala, HttpStatus.OK);
    }
}
