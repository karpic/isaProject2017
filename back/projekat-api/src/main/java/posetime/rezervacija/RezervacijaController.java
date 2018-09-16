package posetime.rezervacija;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;
import posetime.Korisnici.Korisnik;
import posetime.Korisnici.KorisnikService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
public class RezervacijaController {

    @Autowired
    private RezervacijaService rezervacijaService;

    @Autowired
    private KorisnikService korisnikService;

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/reservation/{email}/",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Rezervacija> makeReservation(@RequestBody Rezervacija rezervacija, @PathVariable("email") String email) {
        System.out.println("USAO U REZERVACIJU");
        Korisnik k =korisnikService.findByEmail(email);
        rezervacija.setKorisnik(k);
        Rezervacija r = rezervacijaService.addRezervacija(rezervacija);
        k.getRezervacije().add(r.getId());
        korisnikService.save(k);
        return new ResponseEntity<Rezervacija>(r,HttpStatus.OK);

    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "reservation",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Rezervacija>> getRezervacije() {
        return new ResponseEntity<List<Rezervacija>>(rezervacijaService.getAll(), HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "rezervation/{email}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Rezervacija>> getByKorisnik(@PathVariable("email") String email) {
        return new ResponseEntity<List<Rezervacija>>(rezervacijaService.getByKorisnik(email), HttpStatus.OK);
    }
}
