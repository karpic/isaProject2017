package posetime.pozorista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

import java.awt.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PozoristeController {

    @Autowired
    private PozoristeService pozoristeService;

    public PozoristeController(PozoristeService pozoristeService){
        this.pozoristeService = pozoristeService;
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/pozoriste",
            produces = MediaType.APPLICATION_JSON_VALUE
    )

    public ResponseEntity<List<Pozoriste>> getAll(){
        List<Pozoriste> pozorista = pozoristeService.findAll();
        return new ResponseEntity<List<Pozoriste>>(pozorista, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value ="/pozoriste/{id]",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Pozoriste> getPozorista(@PathVariable ("id") String id) {
        Pozoriste pozorista = this.pozoristeService.findOne(id);
        if(pozorista == null){
            return new ResponseEntity<Pozoriste>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Pozoriste>(pozorista, HttpStatus.OK);
    }
    @RequestMapping(
            method = RequestMethod.POST,
            value = "/pozoriste",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Pozoriste> insertPozoriste(@RequestBody Pozoriste pozoriste) throws Exception{
        Pozoriste createdPozoriste = this.pozoristeService.create(pozoriste);
        return new ResponseEntity<>(createdPozoriste, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/pozoriste/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Pozoriste> updatePozoriste(@PathVariable("id") String id, @RequestBody Pozoriste pozoriste) throws Exception{
        Pozoriste pozorista = this.pozoristeService.findOne(id);

        if(pozorista == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Pozoriste updatePozoriste = this.pozoristeService.update(pozoriste);
        if (updatePozoriste == null) {
            return new ResponseEntity<Pozoriste>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updatePozoriste, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/pozortiste/{id}"
    )
    public ResponseEntity<Pozoriste> deleteBioskop(@PathVariable("id") String id){
        this.pozoristeService.delete(id);
        return new ResponseEntity<Pozoriste>(HttpStatus.NO_CONTENT);
    }
}
