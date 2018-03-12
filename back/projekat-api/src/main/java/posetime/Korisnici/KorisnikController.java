package posetime.Korisnici;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import posetime.Korisnici.Role.Role;
import posetime.Korisnici.Role.RoleNames;
import posetime.Korisnici.Role.RoleRepository;
import posetime.Korisnici.Role.RoleService;

import javax.print.attribute.standard.Media;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class KorisnikController {

    @Autowired
    private KorisnikService korisnikService;

    @Autowired
    private RoleService roleService;

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
            List<Role> roles = new ArrayList<Role>();
            roles.add(roleService.findByName(RoleNames.ROLE_USER));
            korisnik.setRoles(roles);
            Korisnik k = korisnikService.insert(korisnik);
            roleService.addUser(RoleNames.ROLE_USER,korisnik);
            return new ResponseEntity<Korisnik>(k,HttpStatus.OK);
    }
}
