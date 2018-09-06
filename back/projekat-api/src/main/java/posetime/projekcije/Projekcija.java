package posetime.projekcije;

import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import posetime.Sala.Sala;
import posetime.Sala.SalaService;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection ="Projekcije")
public class Projekcija {


    @Autowired
    SalaService salaService;

    @Id
    private String id;
    private String  sala;
    private Boolean br_mesta;
    private String termin;



    public Projekcija(){

    }


    public Projekcija(String id, String sala, Boolean br_mesta, String termin) {
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

    public Boolean isBr_mesta() {
        return br_mesta;
    }

    public void setBr_mesta(Boolean br_mesta) {
        this.br_mesta = br_mesta;
    }

    public String getTermin() {
        return termin;
    }

    public void setTermin(String termin) {
        this.termin = termin;
    }

}
