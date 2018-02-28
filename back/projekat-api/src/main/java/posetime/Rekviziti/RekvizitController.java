package posetime.Rekviziti;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.net.ssl.HttpsURLConnection;
import javax.validation.Valid;
import javax.xml.ws.Response;
import java.util.List;

@RestController
@CrossOrigin("*")
public class RekvizitController {

    @Autowired
    private RekvizitService rekvizitService;

    @RequestMapping(
            method=RequestMethod.GET,
            value="/rekviziti",
            produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<TematskiRekvizit>> getAll(){

        List<TematskiRekvizit> rekviziti = this.rekvizitService.findAll();

        return new ResponseEntity<List<TematskiRekvizit>>(rekviziti, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/rekviziti/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<TematskiRekvizit> getRekvizit(@PathVariable("id") String id){
        TematskiRekvizit rekvizit = this.rekvizitService.findOne(id);
        if(rekvizit == null){
            return new ResponseEntity<TematskiRekvizit>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<TematskiRekvizit>(rekvizit, HttpStatus.OK);
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value="/rekviziti",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<TematskiRekvizit> insertRekvizit(@RequestBody TematskiRekvizit rek) throws Exception{

        TematskiRekvizit  rekvizit = this.rekvizitService.create(rek);
        return new ResponseEntity<TematskiRekvizit>(rekvizit, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/rekviziti/{id}"
    )
    public ResponseEntity<TematskiRekvizit> deleteRekvizit(@PathVariable("id") String id){
        this.rekvizitService.delete(id);
        return new ResponseEntity<TematskiRekvizit>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(
            value = "/rekviziti/{id}",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<TematskiRekvizit> updateRekvizit(@PathVariable("id") String id) throws Exception{
        TematskiRekvizit rekvizitData = this.rekvizitService.findOne(id);

        if(rekvizitData == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        TematskiRekvizit updatedRekvizit = this.rekvizitService.update(rekvizitData);
        if (updatedRekvizit == null) {
            return new ResponseEntity<TematskiRekvizit>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updatedRekvizit, HttpStatus.OK);
    }
}

