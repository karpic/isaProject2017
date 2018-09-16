package posetime.projekcije;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import posetime.Sala.Sala;
import posetime.Sala.SalaService;
import posetime.filmovi.Filmovi;
import posetime.filmovi.FilmoviService;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProjekcijaController {


    @Autowired
    ProjekcijaService projekcijaService;

    @Autowired
    FilmoviService filmoviService;

    @Autowired
    SalaService salaService;
    @RequestMapping(
            method = RequestMethod.GET,
            value ="/projekcije",
            produces  = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Projekcija>> getAll() {
        List<Projekcija> projekcije = this.projekcijaService.findAll();
        return new ResponseEntity<List<Projekcija>>(projekcije, HttpStatus.OK);
    }


    @RequestMapping(
            method = RequestMethod.GET,
            value ="/projekcije/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Projekcija> getProjekcija(@PathVariable("id") String id) {
        Projekcija projekcije = this.projekcijaService.findOne(id);
        if(projekcije == null){
            return new ResponseEntity<Projekcija>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Projekcija>(projekcije, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/projekcije/filmovi/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )

    public ResponseEntity<Projekcija> insertProjekcija(@RequestBody Projekcija projekcija,@PathVariable ("id") String id) throws Exception{

        Projekcija createdProjekcija  = this.projekcijaService.create(projekcija);

        Filmovi film = filmoviService.findOne(id);

        film.getProjekcije().add(createdProjekcija.getId());
        filmoviService.update(film);
        return new ResponseEntity<Projekcija>(createdProjekcija, HttpStatus.CREATED);
    }


}
