package posetime.projekcije;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import posetime.Sala.SalaService;

import java.util.ArrayList;

@Document(collection ="Projekcije")
public class Projekcija {


    @Autowired
    SalaService salaService;

    @Id
    private String id;
    private String  sala;
    private boolean[] br_mesta;
    private String termin;



    public Projekcija(){

    }


    public Projekcija(String id, String sala, boolean[] br_mesta, String termin) {
        this.id = id;
        this.sala = sala;
        this.br_mesta =  br_mesta;
        this.termin = termin;

    }

    public String getSala() {
        return sala;
    }

    public String getId() {
        return id;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }

    public boolean[] isBr_mesta() {
        return br_mesta;
    }

    public void setBr_mesta(boolean[] br_mesta) {
        this.br_mesta = br_mesta;
    }

    public String getTermin() {
        return termin;
    }

    public void setTermin(String termin) {
        this.termin = termin;
    }

}
