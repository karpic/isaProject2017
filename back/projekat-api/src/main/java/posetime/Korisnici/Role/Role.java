package posetime.Korisnici.Role;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import posetime.Korisnici.Korisnik;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Role")
public class Role {

    @Id
    private String id;
    private RoleNames roleName;
    private List<Korisnik> korisnici;

    public Role() {

    }

    public Role(RoleNames roleName, List<Korisnik> korisnici) {
        this.roleName = roleName;
        this.korisnici = korisnici;
    }

    public RoleNames getRoleName() {
        return roleName;
    }

    public void setRoleName(RoleNames roleName) {
        this.roleName = roleName;
    }

    public List<Korisnik> getKorisnici() {
        if(korisnici==null) {
            this.korisnici = new ArrayList<Korisnik>();
        }
        return korisnici;
    }

    public void setKorisnici(List<Korisnik> korisnici) {
        this.korisnici = korisnici;
    }
}
