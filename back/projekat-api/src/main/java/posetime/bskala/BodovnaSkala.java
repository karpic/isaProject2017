package posetime.bskala;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "skala")
public class BodovnaSkala {
    /*
    * Broj bodova koje korisnik treba da ostvari da bi postao
    * bronzani, srebrni ili zlatni korisnik
     */
    @Id
    private String id;
    private int bronzani;
    private int srebrni;
    private int zlatni;

    protected BodovnaSkala() {

    }

    public BodovnaSkala(String id, int bronzani, int srebrni, int zlatni) {
        this.id = id;
        this.bronzani = bronzani;
        this.srebrni = srebrni;
        this.zlatni = zlatni;
    }

    public int getBronzani() {
        return bronzani;
    }

    public void setBronzani(int bronzani) {
        this.bronzani = bronzani;
    }

    public int getSrebrni() {
        return srebrni;
    }

    public void setSrebrni(int srebrni) {
        this.srebrni = srebrni;
    }

    public int getZlatni() {
        return zlatni;
    }

    public void setZlatni(int zlatni) {
        this.zlatni = zlatni;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
