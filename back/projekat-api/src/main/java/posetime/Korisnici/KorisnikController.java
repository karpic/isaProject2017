package posetime.Korisnici;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import posetime.Korisnici.Role.RoleNames;
import posetime.Korisnici.registration.EmailService;

import javax.xml.ws.Response;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin("*")
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
            korisnik.setPasswordChanged(false);
            korisnik.setBodovi(0);
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
            value = "/register/bpadmin",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Korisnik> insertBpAdmin(@RequestBody Korisnik korisnik){
        List<String> roles = new ArrayList<String>();
        roles.add("BP_ADMIN");
        korisnik.setRoles(roles);
        korisnik.setEnabled(true);
        korisnik.setPasswordChanged(false);
        korisnik.setBodovi(0);
        korisnik.setPrijatelji(new ArrayList<String>());
        korisnik.setZahtevi(new ArrayList<String>());
        korisnik.setPonude(new ArrayList<String>());
        korisnik.setObavestenja(new ArrayList<String>());
        korisnik.setConfirmationToken(UUID.randomUUID().toString());

        /*System.out.println(korisnik.getIme());
        System.out.println(korisnik.getPrezime());
        System.out.println(korisnik.getEmail());
        System.out.println(korisnik.getBrtel());
        System.out.println(korisnik.getGrad());
        System.out.println(korisnik.getPassword());*/
        Korisnik insertedKorisnik = korisnikService.insert(korisnik);
        return new ResponseEntity<Korisnik>(insertedKorisnik, HttpStatus.OK);
    }

    @RequestMapping(
            value = "/register/fanadmin",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Korisnik> insertFanzonaAdmin(@RequestBody Korisnik korisnik){
        List<String> roles = new ArrayList<String>();
        roles.add("FANZONA_ADMIN");
        korisnik.setRoles(roles);
        korisnik.setEnabled(true);
        korisnik.setPasswordChanged(false);
        korisnik.setBodovi(0);
        korisnik.setPrijatelji(new ArrayList<String>());
        korisnik.setZahtevi(new ArrayList<String>());
        korisnik.setPonude(new ArrayList<String>());
        korisnik.setObavestenja(new ArrayList<String>());
        korisnik.setConfirmationToken(UUID.randomUUID().toString());

        Korisnik insertedKorisnik = korisnikService.insert(korisnik);
        return new ResponseEntity<Korisnik>(insertedKorisnik, HttpStatus.OK);
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

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/user/{email}/",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Korisnik> getKorisnik(@PathVariable("email") String email) {
        Korisnik k = korisnikService.findByEmail(email);
        System.out.println(k.getEmail());
        return new ResponseEntity<Korisnik>(k,HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/user/{email}/",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Korisnik> updateOglas(@PathVariable("email") String email, @RequestBody Korisnik korisnik) throws Exception{
        Korisnik user = this.korisnikService.findByEmail(email);

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        user.setIme(korisnik.getIme());
        user.setPrezime(korisnik.getPrezime());
        user.setGrad(korisnik.getGrad());
        user.setBrtel(korisnik.getBrtel());

        Korisnik updatedUser = this.korisnikService.save(user);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/user/parameters",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Korisnik>> getUserByName(@RequestParam Map<String,String> requestParams) {
        String ime = requestParams.get("ime");
        String prezime = requestParams.get("prezime");
        if(ime.equals("") && !prezime.equals("")) {
            return new ResponseEntity<List<Korisnik>>(korisnikService.findBySurname(prezime),HttpStatus.OK);
        }

        if(prezime.equals("") && !ime.equals("")) {
            return new ResponseEntity<List<Korisnik>>(korisnikService.findByName(ime), HttpStatus.OK);
        }

        if(!ime.equals("") && !prezime.equals("")) {
            return new ResponseEntity<List<Korisnik>>(korisnikService.findByInfo(ime,prezime), HttpStatus.OK);
        }

        return new ResponseEntity<List<Korisnik>>(HttpStatus.NOT_FOUND);

    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/user/request",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Korisnik> addFriend(@RequestParam Map<String,String> request, @RequestBody Korisnik korisnik) {
        String to = request.get("to");
        System.out.println("From: " + korisnik.getEmail() + " To: " + to );
        Korisnik primalac = korisnikService.findByEmail(to);
        primalac.getZahtevi().add(korisnik.getEmail());
        korisnikService.save(primalac);
        return new ResponseEntity<Korisnik>(HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/user/respond",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Korisnik> respondToRequest(@RequestParam Map<String,String> params, @RequestBody Korisnik korisnik) {
        String action = params.get("action");
        String from = params.get("from");
        Korisnik to = korisnikService.findByEmail(korisnik.getEmail());
        to.getZahtevi().remove(from);
        if(action.equals("accept")) {
            Korisnik userFrom = korisnikService.findByEmail(from);
            to.getPrijatelji().add(from);
            userFrom.getPrijatelji().add(to.getEmail());
            korisnikService.save(userFrom);
        }

        korisnikService.save(to);

        return new ResponseEntity<Korisnik>(HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/user/requests/{email}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Korisnik>> getRequests(@PathVariable("email") String email) {
        Korisnik korisnik = korisnikService.findByEmail(email);
        List<Korisnik> zahtevi = new ArrayList<Korisnik>();

        for(String s : korisnik.getZahtevi()) {
            Korisnik k = korisnikService.findByEmail(s);
            zahtevi.add(k);
        }

        return new ResponseEntity<List<Korisnik>>(zahtevi,HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/user/friends/{email}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Korisnik>> getFriends(@PathVariable("email") String email) {
        Korisnik korisnik = korisnikService.findByEmail(email);
        List<Korisnik> prijatelji = new ArrayList<Korisnik>();

        for(String s : korisnik.getPrijatelji()) {
            Korisnik k = korisnikService.findByEmail(s);
            prijatelji.add(k);
        }

        return new ResponseEntity<List<Korisnik>>(prijatelji,HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/user/friends/{email}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Korisnik> deleteFriend(@PathVariable("email") String email,@RequestBody Korisnik korisnik) {
        Korisnik korisnik1 = korisnikService.findByEmail(korisnik.getEmail());
        Korisnik korisnik2 = korisnikService.findByEmail(email);

        korisnik1.getPrijatelji().remove(korisnik2.getEmail());
        korisnik2.getPrijatelji().remove(korisnik1.getEmail());

        korisnikService.save(korisnik1);
        korisnikService.save(korisnik2);

        return new ResponseEntity<Korisnik>(HttpStatus.OK);
    }



}
