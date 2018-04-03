package posetime.Korisnici;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import posetime.Korisnici.Role.RoleNames;
import posetime.Korisnici.registration.EmailService;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class KorisnikController {

    @Autowired
    private KorisnikService korisnikService;

    @Autowired
    private EmailService emailService;

    public KorisnikController(KorisnikService korisnikService) {
        this.korisnikService = korisnikService;
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/korisnici",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Korisnik>> getAll() {
        List<Korisnik> korisnici = korisnikService.findAll();
        return new ResponseEntity<List<Korisnik>>(korisnici, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/register",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE

    )
    public ResponseEntity<Korisnik> insert(@RequestBody Korisnik korisnik) {
            List<String> roles = new ArrayList<String>();
            roles.add("ROLE_USER");
            korisnik.setRoles(roles);
            korisnik.setEnabled(false);
            korisnik.setPrijatelji(new ArrayList<String>());
            korisnik.setZahtevi(new ArrayList<String>());
            korisnik.setPonude(new ArrayList<String>());
            korisnik.setObavestenja(new ArrayList<String>());
            korisnik.setConfirmationToken(UUID.randomUUID().toString());

            String appUrl = "http://localhost:8080";

            SimpleMailMessage registrationEmail = new SimpleMailMessage();
            registrationEmail.setTo(korisnik.getEmail());
            registrationEmail.setSubject("Registration Confirmation");
            registrationEmail.setText("To confirm your e-mail address, please click the link below:\n"
                    + appUrl + "/confirm?token=" + korisnik.getConfirmationToken());
            registrationEmail.setFrom("poseti.me.isa@gmail.com");

            emailService.sendEmail(registrationEmail);
            Korisnik k = korisnikService.insert(korisnik);
            return new ResponseEntity<Korisnik>(k,HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/confirm"
    )
    public ResponseEntity<Korisnik> confirm(@RequestParam("token") String confirmationToken) {

        Korisnik k = korisnikService.findByConfirmationToken(confirmationToken);
        k.setEnabled(true);
        korisnikService.save(k);
        return  new ResponseEntity<Korisnik>(k,HttpStatus.OK);
    }
}
