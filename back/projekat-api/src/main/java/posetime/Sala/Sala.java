package posetime.Sala;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Sala")
public class Sala {

    @Id
    private String id;
    private int brmesta;
    private int brSlobodnih;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getBrmesta() {
        return brmesta;
    }

    public void setBrmesta(int brmesta) {
        this.brmesta = brmesta;
    }

    public int getBrSlobodnih() {
        return brSlobodnih;
    }

    public void setBrSlobodnih(int brSlobodnih) {
        this.brSlobodnih = brSlobodnih;
    }

    public Sala(){


    }
    public Sala(String id, int brmesta, int brSlobodnih) {
        this.id = id;
        this.brmesta = brmesta;
        this.brSlobodnih=brSlobodnih;
    }
}
