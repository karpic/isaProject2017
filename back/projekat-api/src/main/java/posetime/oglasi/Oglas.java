package posetime.oglasi;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Oglasi")
public class Oglas {
    @Id
    private String id;
    private String naziv;
    private String opis;
    private Date datum;
    private boolean odobren;
    private String ownerUserName;
    private String imgPath;
    /*
    * Status oglasa:
    *   0. neodobren
    *   1. na recenziji
    *   2. odobren
     */
    private int status;

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getAdminRec() {
        return adminRec;
    }

    public void setAdminRec(String adminRec) {
        this.adminRec = adminRec;
    }

    /*
            admin koji vrsi recenziju za oglas
         */
    private String adminRec;
    protected Oglas(){

    }

    public Oglas(String naziv, String opis, Date datum, boolean odobren) {
        this.naziv = naziv;
        this.opis = opis;
        this.datum = datum;
        this.odobren = odobren;
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

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public Date getDatum() {
        return datum;
    }

    public void setDatum(Date datum) {
        this.datum = datum;
    }

    public boolean isOdobren() {
        return odobren;
    }

    public void setOdobren(boolean odobren) {
        this.odobren = odobren;
    }

    public String getOwnerUserName() {
        return ownerUserName;
    }

    public void setOwnerUserName(String ownerUserName) {
        this.ownerUserName = ownerUserName;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }
}
