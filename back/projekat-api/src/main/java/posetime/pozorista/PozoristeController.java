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
            method = RequestMethod.POST,
            value = "/pozoriste",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Pozoriste> insertPozoriste(@RequestBody Pozoriste pozoriste) throws Exception{
        Pozoriste createdPozoriste = this.pozoristeService.create(pozoriste);
        return new ResponseEntity<>(createdPozoriste, HttpStatus.CREATED);
    }
}
