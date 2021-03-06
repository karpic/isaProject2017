package posetime.projekcijePoz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import posetime.Sala.SalaService;
import posetime.pozorista.Pozoriste;
import posetime.prestave.Predstave;
import posetime.prestave.PredstaveService;
import posetime.projekcije.Projekcija;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProjekcijaPozController {

    @Autowired
    ProjekcijaPozService projekcijaPozServiceService;

    @Autowired
    PredstaveService predstaveService;

    @Autowired
    SalaService salaService;


    @RequestMapping(
            method = RequestMethod.GET,
            value ="/projekcijePoz",
            produces  = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<ProjekcijaPoz>> getAll() {
        List<ProjekcijaPoz> projekcije = this.projekcijaPozServiceService.findAll();
        return new ResponseEntity<List<ProjekcijaPoz>>(projekcije, HttpStatus.OK);
    }


    @RequestMapping(
            method = RequestMethod.GET,
            value ="/projekcijePoz/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<ProjekcijaPoz> getProjekcijaPoz(@PathVariable("id") String id) {
        ProjekcijaPoz projekcije = this.projekcijaPozServiceService.findOne(id);
        if(projekcije == null){
            return new ResponseEntity<ProjekcijaPoz>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<ProjekcijaPoz>(projekcije, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/projekcijePoz/predstave/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<ProjekcijaPoz> insertProjekcijaPoz(@RequestBody ProjekcijaPoz projekcija, @PathVariable ("id") String id) throws Exception{

        ProjekcijaPoz createdProjekcija  = this.projekcijaPozServiceService.create(projekcija);

        Predstave predstava = predstaveService.findOne(id);

        predstava.getProjekcijePoz().add(createdProjekcija.getId());
        predstaveService.update(predstava);
        return new ResponseEntity<ProjekcijaPoz>(createdProjekcija, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/projekcijePoz/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<ProjekcijaPoz> updateProjekcijaPoz(@PathVariable("id") String id, @RequestBody ProjekcijaPoz projekcijaPoz) throws Exception{
        ProjekcijaPoz projPoz = this.projekcijaPozServiceService.findOne(id);

        if(projPoz == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        ProjekcijaPoz updateProjekcijaPoz = this.projekcijaPozServiceService.update(projekcijaPoz);
        if (updateProjekcijaPoz == null) {
            return new ResponseEntity<ProjekcijaPoz>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updateProjekcijaPoz, HttpStatus.OK);
    }
}
