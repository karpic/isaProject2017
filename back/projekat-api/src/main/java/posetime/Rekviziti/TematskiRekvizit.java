package posetime.Rekviziti;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection = "rekviziti")
public class TematskiRekvizit {
    @Id
    private String id;
    private String ime;
    private String opis;

    public TematskiRekvizit(){

    }

    public TematskiRekvizit(String ime, String opis) {
        this.ime = ime;
        this.opis = opis;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getId() {
        return id;
    }

    public String getIme() {
        return ime;
    }

    public String getOpis() {
        return opis;
    }
}
