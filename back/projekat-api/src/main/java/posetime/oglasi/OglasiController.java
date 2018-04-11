package posetime.oglasi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import posetime.ponude.Ponuda;
import posetime.ponude.PonudaService;

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
            value = "/oglasi/odobreni",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Oglas>> getOdobreni(){
        List<Oglas> odobreniOglasi = this.oglasService.findByStatus(2);
        return new ResponseEntity<List<Oglas>>(odobreniOglasi, HttpStatus.OK);
    }

    @RequestMapping(
            value = "/oglasi/neodobreni",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Oglas>> getNeodobreni(){
        List<Oglas> neodobreniOglasi = this.oglasService.findByStatus(0);
        return new ResponseEntity<List<Oglas>>(neodobreniOglasi, HttpStatus.OK);
    }

    @RequestMapping(
            value = "oglasi/recenzija/{admin}"
    )
    public ResponseEntity<List<Oglas>> getRazmatrani(@PathVariable("admin") String admin){
        List<Oglas> razmatraniOglasiZaAdmina = this.oglasService.findByStatusAndAdminRec(1, admin + ".com");
        return new ResponseEntity<List<Oglas>>(razmatraniOglasiZaAdmina, HttpStatus.OK);
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
    public ResponseEntity<Oglas> updateOglas(@PathVariable("id") String id, @RequestBody Oglas oglas) throws Exception{
        Oglas oglasData = this.oglasService.findOne(id);

        if(oglasData == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Oglas updatedOglas = this.oglasService.update(oglas);
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
