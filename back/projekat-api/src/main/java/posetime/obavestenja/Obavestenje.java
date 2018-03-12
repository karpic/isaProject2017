package posetime.obavestenja;

import org.springframework.data.annotation.Id;

public class Obavestenje {
    @Id
    private String Id;
    private String text;
    private String username;

    protected  Obavestenje() {

    }

    public Obavestenje(String text, String username) {
        this.text = text;
        this.username = username;
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
