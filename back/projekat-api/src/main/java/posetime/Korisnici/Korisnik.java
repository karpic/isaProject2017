package posetime.Korisnici;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "Korisnici")
public class Korisnik {

    @Id
    private String id;
    private String ime;
    private String prezime;
    private String email;
    private String password;
    private String brtel;
    private String grad;
    private String tip;
    private List<String> prijatelji;
    private List<String> zahtevi;
    private List<String> ponude;
    private List<String> obavestenja;

    public Korisnik() {

    }

    public Korisnik(String ime, String prezime, String email, String password, String brtel, String grad, String tip, List<String> prijatelji, List<String> zahtevi, List<String> ponude, List<String> obavestenja) {

        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.password = password;
        this.brtel = brtel;
        this.grad = grad;
        this.tip = tip;
        this.prijatelji = prijatelji;
        this.zahtevi = zahtevi;
        this.ponude = ponude;
        this.obavestenja = obavestenja;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBrtel() {
        return brtel;
    }

    public void setBrtel(String brtel) {
        this.brtel = brtel;
    }

    public String getGrad() {
        return grad;
    }

    public void setGrad(String grad) {
        this.grad = grad;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
    }

    public List<String> getPrijatelji() {
        return prijatelji;
    }

    public void setPrijatelji(List<String> prijatelji) {
        this.prijatelji = prijatelji;
    }

    public List<String> getZahtevi() {
        return zahtevi;
    }

    public void setZahtevi(List<String> zahtevi) {
        this.zahtevi = zahtevi;
    }

    public List<String> getPonude() {
        return ponude;
    }

    public void setPonude(List<String> ponude) {
        this.ponude = ponude;
    }

    public List<String> getObavestenja() {
        return obavestenja;
    }

    public void setObavestenja(List<String> obavestenja) {
        this.obavestenja = obavestenja;
    }
}
