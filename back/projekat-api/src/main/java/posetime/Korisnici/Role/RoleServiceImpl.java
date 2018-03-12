package posetime.Korisnici.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import posetime.Korisnici.Korisnik;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void addUser(RoleNames name,Korisnik k) {
        List<Role> roles = roleRepository.findAll();
        for(Role r: roles) {
            if(r.getRoleName().equals(name)) {
                r.getKorisnici().add(k);
                roleRepository.save(r);
            }
        }
    }

    @Override
    public Role findByName(RoleNames name) {
        List<Role> roles = roleRepository.findAll();

        for(Role r: roles) {
            if(r.getRoleName().equals(name)) {
                return r;
            }
        }
        return null;
    }
}
