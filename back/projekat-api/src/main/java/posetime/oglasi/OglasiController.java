package posetime.oglasi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;

import javax.print.attribute.standard.Media;
import java.awt.*;
import java.util.List;

@RestController
@CrossOrigin("*")
public class OglasiController {

    @Autowired
    private OglasService oglasService;

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/oglasi",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Oglas>> getAll(){
        List<Oglas> oglasi = this.oglasService.findAll();
        return new ResponseEntity<List<Oglas>>(oglasi, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/oglasi/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Oglas> getOglas(@PathVariable("id") String id){
        Oglas oglas = this.oglasService.findOne(id);

        if(oglas == null){
            return new ResponseEntity<Oglas>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Oglas>(oglas, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/oglasi",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Oglas> insertOglas(@RequestBody Oglas oglas) throws Exception{
        Oglas creadedOglas = this.oglasService.create(oglas);
        return new ResponseEntity<Oglas>(creadedOglas, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/oglasi/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Oglas> updateOglas(@PathVariable("id") String id) throws Exception{
        Oglas oglasData = this.oglasService.findOne(id);

        if(oglasData == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Oglas updatedOglas = this.oglasService.update(oglasData);
        if (updatedOglas == null) {
            return new ResponseEntity<Oglas>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updatedOglas, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/oglasi/{id}"
    )
    public ResponseEntity<Oglas> deleteOglas(@PathVariable("id") String id){
        this.oglasService.delete(id);
        return new ResponseEntity<Oglas>(HttpStatus.NO_CONTENT);
    }
}
