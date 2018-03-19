package posetime.bioskopi;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BioskopController {

    @Autowired
    private BioskopService bioskopService;

    public BioskopController(BioskopService bioskopService) {
        this.bioskopService = bioskopService;
    }
    @RequestMapping(
            method = RequestMethod.GET,
            value ="/bioskopi",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Bioskop>> getAll() {
        List<Bioskop> bioksopi = bioskopService.findAll();
        return new ResponseEntity<List<Bioskop>>(bioksopi, HttpStatus.OK);
    }

}
