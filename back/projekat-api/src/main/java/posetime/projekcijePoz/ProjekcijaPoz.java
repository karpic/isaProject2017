package posetime.projekcijePoz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import posetime.Sala.SalaService;
import posetime.projekcije.Projekcija;

@Document(collection = "ProjekcijePoz")
public class ProjekcijaPoz {


    @Autowired
    SalaService salaService;

    @Id
    private String id;
    private String  sala;
    private boolean[] br_mesta;
    private String termin;


    public ProjekcijaPoz(){

    }
    public ProjekcijaPoz(String id, String sala, boolean[] br_mesta, String termin) {
        this.id = id;
        this.sala = sala;
        this.br_mesta = br_mesta;
        this.termin = termin;
    }

    public SalaService getSalaService() {
        return salaService;
    }

    public void setSalaService(SalaService salaService) {
        this.salaService = salaService;
    }

    public String getId() {
        return id;
    }

    public String getSala() {
        return sala;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }

    public boolean[] getBr_mesta() {
        return br_mesta;
    }

    public void setBr_mesta(boolean[] br_mesta) {
        this.br_mesta = br_mesta;
    }

    public String getTermin() {
        return termin;
    }

    public void setTermin(String termin) {
        this.termin = termin;
    }
}
