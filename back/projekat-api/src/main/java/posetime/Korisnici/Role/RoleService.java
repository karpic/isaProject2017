package posetime.Korisnici.Role;

import posetime.Korisnici.Korisnik;

public interface RoleService {

    void addUser(RoleNames name, Korisnik k);
    Role findByName(RoleNames name);

}
