package posetime.filmovi;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import posetime.Sala.Sala;
import posetime.projekcije.Projekcija;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Filmovi")
public class Filmovi {

    @Id
    private String id;
    private String naziv;
    private String glumci;
    private String zanr;
    private String reditelj;
    private String trajanje;
    private String poster;
    private String ocena;
    private String opis;
    private String sala;
    private String termin;
    private int cena;
    private ArrayList<String> projekcije;


    public Filmovi(){

    }

    public Filmovi(String id, String naziv, String glumci, String zanr, String reditelj, String trajanje, String poster, String ocena, String opis, String sala, String termin, int cena, ArrayList<String> projekcije) {
        this.id = id;
        this.naziv = naziv;
        this.glumci = glumci;
        this.zanr = zanr;
        this.reditelj = reditelj;
        this.trajanje = trajanje;
        this.poster = poster;
        this.ocena = ocena;
        this.opis = opis;
        this.sala = sala;
        this.termin = termin;
        this.cena = cena;
        this.projekcije = projekcije;
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

    public String getGlumci() {
        return glumci;
    }

    public void setGlumci(String glumci) {
        this.glumci = glumci;
    }

    public String getZanr() {
        return zanr;
    }

    public void setZanr(String zanr) {
        this.zanr = zanr;
    }

    public String getReditelj() {
        return reditelj;
    }

    public void setReditelj(String reditelj) {
        this.reditelj = reditelj;
    }

    public String getTrajanje() {
        return trajanje;
    }

    public void setTrajanje(String trajanje) {
        this.trajanje = trajanje;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getOcena() {
        return ocena;
    }

    public void setOcena(String ocena) {
        this.ocena = ocena;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getSala() {
        return sala;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }

    public String getTermin() {
        return termin;
    }

    public void setTermin(String termin) {
        this.termin = termin;
    }

    public int getCena() {
        return cena;
    }

    public void setCena(int cena) {
        this.cena = cena;
    }

    public ArrayList<String> getProjekcije() {
        return projekcije;
    }

    public void setProjekcije(ArrayList<String> projekcije) {
        this.projekcije = projekcije;
    }
}
