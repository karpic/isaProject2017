package posetime.pozorista;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document (collection = "Pozorista")
public class Pozoriste {

    @Id
    private String id;
    private String naziv;
    private String adresa;
    private String opis;
    private List<String> repertoar;
    private List<String> brmesta;

    public Pozoriste() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getAdresa() {
        return adresa;
    }

    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public List<String> getRepertoar() {
        return repertoar;
    }

    public void setRepertoar(List<String> repertoar) {
        this.repertoar = repertoar;
    }

    public List<String> getBrmesta() {
        return brmesta;
    }

    public void setBrmesta(List<String> brmesta) {
        this.brmesta = brmesta;
    }

    public Pozoriste(String id, String naziv, String adresa, String opis, List<String> repertoar, List<String> brmesta){

        this.id=id;
        this.naziv=naziv;
        this.adresa=adresa;
        this.opis=opis;
        this.repertoar=repertoar;
        this.brmesta=brmesta;
    }
}