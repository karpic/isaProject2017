package posetime.ponude;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;

import java.awt.*;
import java.util.List;

@RestController()
@CrossOrigin("*")
public class PonudeController {
    @Autowired
    private PonudaService ponudaService;

    @RequestMapping(
            method = RequestMethod.GET,
            value="/ponude",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Ponuda>> getAll(){

        List<Ponuda> ponude = this.ponudaService.findAll();
        return new ResponseEntity<List<Ponuda>>(ponude, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/ponude/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Ponuda> getPonuda(@PathVariable("id") String id){
        Ponuda ponuda = this.ponudaService.findOne(id);
        if(ponuda == null){
            return new ResponseEntity<Ponuda>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Ponuda>(ponuda, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/oglasi/{id}/ponude",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Ponuda>> getPonudeByOglasId(@PathVariable("id") String id){
        List<Ponuda> ponude = this.ponudaService.findByOglasId(id);
        return new ResponseEntity<List<Ponuda>>(ponude, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "ponude/korisnik/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Ponuda>> getPonudeByUserId(@PathVariable("id") String id){
        List<Ponuda> ponude = this.ponudaService.findByUserId(id);
        return new ResponseEntity<List<Ponuda>>(ponude, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/ponude",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Ponuda> insertPonuda(@RequestBody Ponuda ponuda) throws Exception{
        Ponuda createdPonuda = this.ponudaService.create(ponuda);
        return new ResponseEntity<Ponuda>(createdPonuda, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/ponude/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Ponuda> updatePonuda(@PathVariable("id") String id, @RequestBody Ponuda ponuda) throws Exception{
        Ponuda ponudaData = this.ponudaService.findOne(id);

        if(ponudaData == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Ponuda updatedPonuda = this.ponudaService.update(ponuda);
        if (updatedPonuda == null) {
            return new ResponseEntity<Ponuda>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updatedPonuda, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/ponude/{id}"
    )
    public ResponseEntity<Ponuda> deletePonuda(@PathVariable("id") String id){
        this.ponudaService.delete(id);
        return new ResponseEntity<Ponuda>(HttpStatus.NO_CONTENT);
    }
}
