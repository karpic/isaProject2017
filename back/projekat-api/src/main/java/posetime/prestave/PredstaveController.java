package posetime.prestave;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import posetime.pozorista.Pozoriste;
import posetime.pozorista.PozoristeService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
public class PredstaveController {

    @Autowired
    private PredstaveService predstaveService;

    @Autowired
    private PozoristeService pozoristeService;
<<<<<<< HEAD

=======
>>>>>>> 6e9b236aa6fa3b6db0eed9a41629b14cefe4d959
    @RequestMapping(
            method = RequestMethod.GET,
            value ="/predstave",
            produces  = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Predstave>> getAll() {
        List<Predstave> predstave = this.predstaveService.findAll();
        return new ResponseEntity<List<Predstave>>(predstave, HttpStatus.OK);
    }


    @RequestMapping(
            method = RequestMethod.GET,
            value ="/predstave/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Predstave> getPredstava(@PathVariable("id") String id) {
        Predstave predstave = this.predstaveService.findOne(id);
        if(predstave == null){
            return new ResponseEntity<Predstave>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Predstave>(predstave, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/predstave/pozorista/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Predstave> insertPredstava(@RequestBody Predstave predstave, @PathVariable ("id") String id) throws Exception{
        Predstave createdPredstava  = this.predstaveService.create(predstave);
        Pozoriste p = pozoristeService.findOne(id);
        p.getRepertoar().add(createdPredstava.getId());
        pozoristeService.update(p);
        return new ResponseEntity<Predstave>(createdPredstava, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/predstave/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Predstave> updatePredstava(@PathVariable("id") String id, @RequestBody Predstave predstava) throws Exception{
        Predstave predstave = this.predstaveService.findOne(id);

        if(predstave == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Predstave updatePredstava = this.predstaveService.update(predstava);
        if (updatePredstava == null) {
            return new ResponseEntity<Predstave>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updatePredstava, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/predstave/{id}"
    )
    public ResponseEntity<Predstave> deletePredstava(@PathVariable("id") String id){
        this.predstaveService.delete(id);
        return new ResponseEntity<Predstave>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/predstave/repertoar/{id}"
    )
    public ResponseEntity<List<Predstave>> getRepertoar(@PathVariable("id") String id) {
        Pozoriste p = pozoristeService.findOne(id);
        ArrayList<Predstave> predstave = new ArrayList<Predstave>();

        /*for(String s : p.getRepertoar()) {
            predstave.add(predstaveService.findOne(s));
        }*/

        return new ResponseEntity<List<Predstave>>(HttpStatus.OK);
    }
}

