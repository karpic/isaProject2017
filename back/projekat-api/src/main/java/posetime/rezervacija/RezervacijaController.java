package posetime.rezervacija;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import posetime.Korisnici.KorisnikService;

import java.awt.*;

@RestController
@CrossOrigin("*")
public class RezervacijaController {

    @Autowired
    private RezervacijaService rezervacijaService;

    @Autowired
    private KorisnikService korisnikService;

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/reservation",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Rezervacija> makeReservation(@RequestBody Rezervacija rezervacija) {
        Rezervacija r = rezervacijaService.addRezervacija(rezervacija);
        return new ResponseEntity<Rezervacija>(r,HttpStatus.OK);

    }
}
