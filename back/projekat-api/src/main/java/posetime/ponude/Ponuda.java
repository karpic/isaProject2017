package posetime.ponude;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "ponude")
public class Ponuda {
    @Id
    private String id;
    //id usera koji je napravio ponudu na oglas
    private String userId;
    private String userName;



    //id oglasa na koji je ponuda napravljena
    private String oglasId;
    private int iznos;


    protected Ponuda(){

    }

    public Ponuda(String userId, String oglasId, int iznos, String datum) {
        this.userId = userId;
        this.oglasId = oglasId;
        this.iznos = iznos;

    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getOglasId() {
        return oglasId;
    }

    public void setOglasId(String oglasId) {
        this.oglasId = oglasId;
    }

    public int getIznos() {
        return iznos;
    }

    public void setIznos(int iznos) {
        this.iznos = iznos;
    }


}
