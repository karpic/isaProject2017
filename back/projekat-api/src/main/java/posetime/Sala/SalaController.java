package posetime.Sala;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import posetime.projekcije.Projekcija;
import posetime.projekcije.ProjekcijaService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
public class SalaController {

    @Autowired
    private SalaService salaService;


    @Autowired
    private ProjekcijaService projekcijaService;

    public SalaController(SalaService salaService){this.salaService = salaService;}

    @RequestMapping(
            method = RequestMethod.GET,
            value ="/sale",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Sala>> getAll() {
        List<Sala> sale = this.salaService.findAll();
        return new ResponseEntity<List<Sala>>(sale, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value ="/sale/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Sala> getBioskop(@PathVariable("id") String id) {
        Sala sale = this.salaService.findOne(id);
        if(sale == null){
            return new ResponseEntity<Sala>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Sala>(sale, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/sale/projekcije/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Sala> insertSala(@RequestBody Sala sale, @PathVariable ("id") String id) throws Exception{
        Sala createdSala  = this.salaService.create(sale);
        Projekcija projekcija = this.projekcijaService.findOne(id);


        boolean[] b = new boolean[createdSala.getBrmesta()];
        projekcija.setBr_mesta(b);

        projekcija.setSala(createdSala.getId());
        projekcijaService.update(projekcija);
        return new ResponseEntity<Sala>(createdSala, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/sale/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Sala> updateSala(@PathVariable("id") String id, @RequestBody Sala sala) throws Exception{
        Sala sale = this.salaService.findOne(id);

        if(sale == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Sala updateSala = this.salaService.update(sala);
        if (updateSala == null) {
            return new ResponseEntity<Sala>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updateSala, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/sale/{id}"
    )
    public ResponseEntity<Sala> deleteSala(@PathVariable("id") String id){
        this.salaService.delete(id);
        return new ResponseEntity<Sala>(HttpStatus.NO_CONTENT);
    }
}
