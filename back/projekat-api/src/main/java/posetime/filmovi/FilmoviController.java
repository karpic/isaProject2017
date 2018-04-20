package posetime.filmovi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import posetime.bioskopi.Bioskop;
import posetime.bioskopi.BioskopService;

import java.util.List;

@RestController
@CrossOrigin("*")
public class FilmoviController {


  @Autowired
  private FilmoviService filmoviService;

  @Autowired
  private BioskopService bioskopService;



    @RequestMapping(
            method = RequestMethod.GET,
            value ="/filmovi",
            produces  = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Filmovi>> getAll() {
        List<Filmovi> filmovi = this.filmoviService.findAll();
        return new ResponseEntity<List<Filmovi>>(filmovi, HttpStatus.OK);
    }


    @RequestMapping(
            method = RequestMethod.GET,
            value ="/filmovi/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Filmovi> getFilm(@PathVariable("id") String id) {
        Filmovi filmovi = this.filmoviService.findOne(id);
        if(filmovi == null){
            return new ResponseEntity<Filmovi>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Filmovi>(filmovi, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/filmovi/bioskopi/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Filmovi> insertFilm(@RequestBody Filmovi filmovi, @PathVariable ("id") String id, @PathVariable ("idf") String idf) throws Exception{
        Filmovi createdFilm  = this.filmoviService.create(filmovi);
        Bioskop b = bioskopService.findOne(id);
        Filmovi f = filmoviService.findOne(idf);
        String idfilm = f.getId();
        b.getRepertoar().add(idfilm);
        bioskopService.update(b);
        return new ResponseEntity<Filmovi>(createdFilm, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/filmovi/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Filmovi> updateFilm(@PathVariable("id") String id, @RequestBody Filmovi film) throws Exception{
        Filmovi filmovi = this.filmoviService.findOne(id);

        if(filmovi == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Filmovi updateFilm = this.filmoviService.update(film);
        if (updateFilm == null) {
            return new ResponseEntity<Filmovi>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updateFilm, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/filmovi/{id}"
    )
    public ResponseEntity<Filmovi> deleteFilm(@PathVariable("id") String id){
        this.filmoviService.delete(id);
        return new ResponseEntity<Filmovi>(HttpStatus.NO_CONTENT);
    }
}
