package posetime.Korisnici;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        return korisnikRepository.save(k);
    }

    @Override
    public Korisnik save(Korisnik k) {
        return korisnikRepository.save(k);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Korisnik korisnik = findByEmail(s);
        if(korisnik == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

        for(String r: korisnik.getRoles()) {
            authorities.add(new SimpleGrantedAuthority(r));
        }

        UserDetails userDetails = new org.springframework.security.core.userdetails.
                User(korisnik.getEmail(), korisnik.getPassword(), authorities);

        return userDetails;
    }

    @Override
    public Korisnik findByConfirmationToken(String token) {
        List<Korisnik> korisnici = korisnikRepository.findAll();

        for(Korisnik k : korisnici) {
            if (!k.isEnabled()) {
                if (k.getConfirmationToken().equals(token)) {
                    return k;
                }
            }
        }
        return null;

    }

}
