package posetime.Rekviziti;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection = "Rekviziti")
public class TematskiRekvizit {
    @Id
    private String id;
    private String ime;
    private String opis;

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
