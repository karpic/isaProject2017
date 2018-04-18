package posetime.Sala;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Sala")
public class Sala {

    @Id
    private String id;
    private String brmesta;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBrmesta() {
        return brmesta;
    }

    public void setBrmesta(String brmesta) {
        this.brmesta = brmesta;
    }

    public Sala(String id, String brmesta) {
        this.id = id;

        this.brmesta = brmesta;
    }
}
