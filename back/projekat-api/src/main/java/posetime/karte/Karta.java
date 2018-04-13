package posetime.karte;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Karte")
public class Karta {

    @Id
    private String id;
    private String projPred;
    private String datum;
    private String vreme;
    private String sala;
    private String brSedista;
    private String originalCena;
    private String popustCena;

    public Karta() {

    }



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProjPred() {
        return projPred;
    }

    public void setProjPred(String projPred) {
        this.projPred = projPred;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    public String getVreme() {
        return vreme;
    }

    public void setVreme(String vreme) {
        this.vreme = vreme;
    }

    public String getSala() {
        return sala;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }

    public String getBrSedista() {
        return brSedista;
    }

    public void setBrSedista(String brSedista) {
        this.brSedista = brSedista;
    }

    public String getOriginalCena() {
        return originalCena;
    }

    public void setOriginalCena(String originalCena) {
        this.originalCena = originalCena;
    }

    public String getPopustCena() {
        return popustCena;
    }

    public void setPopustCena(String popustCena) {
        this.popustCena = popustCena;
    }


    public Karta(String id, String projPred, String datum, String vreme, String sala, String brSedista, String originalCena, String popustCena){

        this.id=id;
        this.projPred=projPred;
        this.datum=datum;
        this.vreme=vreme;
        this.sala=sala;
        this.brSedista=brSedista;
        this.originalCena=originalCena;
        this.popustCena=popustCena;

    }
}
