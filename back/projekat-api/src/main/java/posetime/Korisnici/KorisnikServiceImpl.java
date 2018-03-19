package posetime.Korisnici;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import posetime.Korisnici.Role.Role;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service(value = "korisnikService")
public class KorisnikServiceImpl implements UserDetailsService,KorisnikService {

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

    @Override
    public List<Korisnik> findAll() {
        return korisnikRepository.findAll();
    }

    @Override
    public Korisnik findOne(String id) {
        return korisnikRepository.findOne(id);
    }

    @Override
    public Korisnik findByEmail(String email) {
        List<Korisnik> korisnici = korisnikRepository.findAll();

        for(Korisnik k : korisnici) {
            if(k.getEmail().equals(email)) {
                return k;
            }
        }
        return null;
    }

    @Override
    public Korisnik insert(Korisnik k) {
        k.setPassword(bcryptEncoder.encode(k.getPassword()));
        return korisnikRepository.insert(k);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Korisnik korisnik = findByEmail(s);
        if(korisnik == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

        for(Role r: korisnik.getRoles()) {
            authorities.add(new SimpleGrantedAuthority(r.getRoleName().toString()));
        }

        UserDetails userDetails = new org.springframework.security.core.userdetails.
                User(korisnik.getEmail(), korisnik.getPassword(), authorities);

        return userDetails;
    }

}
