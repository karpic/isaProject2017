package posetime.Korisnici;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Korisnici")
public class Korisnik {

    @Id
    @JsonIgnore
    private String id;
    private String ime;
    private String prezime;
    private String email;
    private String password;
    private String brtel;
    private String grad;
    @JsonIgnore
    private boolean enabled;
    @JsonIgnore
    private String confirmationToken;
    private boolean passwordChanged;
    private int bodovi;
    private List<String> roles;
    private List<String> prijatelji;
    private List<String> zahtevi;
    private List<String> ponude;
    private List<String> obavestenja;
    private List<String> rezervacije;

    public Korisnik() {

    }

    public Korisnik(List<String> rezervacije,String ime, String prezime, String email, String password, String brtel, String grad, List<String> roles, List<String> prijatelji, List<String> zahtevi, List<String> ponude, List<String> obavestenja) {
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.password = password;
        this.brtel = brtel;
        this.grad = grad;
        this.roles = roles;
        this.prijatelji = new ArrayList<String>();
        this.zahtevi = new ArrayList<String>();
        this.ponude = new ArrayList<String>();
        this.obavestenja = new ArrayList<String>();
        this.confirmationToken = "";
        this.rezervacije = new ArrayList<String>();
    }

    public List<String> getRezervacije() {
        return rezervacije;
    }

    public void setRezervacije(List<String> rezervacije) {
        this.rezervacije = rezervacije;
    }

    public boolean isPasswordChanged() {
        return passwordChanged;
    }

    public void setPasswordChanged(boolean passwordChanged) {
        this.passwordChanged = passwordChanged;
    }

    public int getBodovi() {
        return bodovi;
    }

    public void setBodovi(int bodovi) {
        this.bodovi = bodovi;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
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

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getConfirmationToken() {
        return confirmationToken;
    }

    public void setConfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
    }
}
