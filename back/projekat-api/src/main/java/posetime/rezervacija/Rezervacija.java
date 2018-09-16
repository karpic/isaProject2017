package posetime.rezervacija;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import posetime.Korisnici.Korisnik;

@Document(collection= "Rezervacija")
public class Rezervacija {

    @Id
    private String id;
    private String id_ustanove;
    private String id_dela;
    private String id_projekcije;
    private Korisnik korisnik;
    private int broj_mesta;
    private String termin;
    private String sala;

    public Rezervacija() {

    }
    public Rezervacija(String id_ustanove, String id_dela, String id_projekcije, Korisnik korisnik, int broj_mesta, String termin, String sala) {
        this.id_ustanove = id_ustanove;
        this.id_dela = id_dela;
        this.id_projekcije = id_projekcije;
        this.korisnik = korisnik;
        this.broj_mesta = broj_mesta;
        this.termin = termin;
        this.sala = sala;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId_ustanove() {
        return id_ustanove;
    }

    public void setId_ustanove(String id_ustanove) {
        this.id_ustanove = id_ustanove;
    }

    public String getId_dela() {
        return id_dela;
    }

    public void setId_dela(String id_dela) {
        this.id_dela = id_dela;
    }

    public Korisnik getKorisnik() {
        return korisnik;
    }

    public void setKorisnik(Korisnik korisnik) {
        this.korisnik = korisnik;
    }

    public int getBroj_mesta() {
        return broj_mesta;
    }

    public void setBroj_mesta(int broj_mesta) {
        this.broj_mesta = broj_mesta;
    }

    public String getTermin() {
        return termin;
    }

    public void setTermin(String termin) {
        this.termin = termin;
    }

    public String getId_projekcije() {
        return id_projekcije;
    }

    public void setId_projekcije(String id_projekcije) {
        this.id_projekcije = id_projekcije;
    }

    public String getSala() {
        return sala;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }
}
