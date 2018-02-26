package posetime.Rekviziti;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("*")
public class RekvizitController {

    @Autowired
    private RekvizitRepository rekvizitRepository;

    @RequestMapping(method=RequestMethod.GET, value="/rekviziti")
    public List<TematskiRekvizit> getAll(){
        return this.rekvizitRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value="/rekviziti")
    public void insert(@RequestBody TematskiRekvizit rek){
        this.rekvizitRepository.insert(rek);
    }

    @DeleteMapping(value="/rekviziti/{id}")
    public void deleteRekvizit(@PathVariable("id") String id) {
        this.rekvizitRepository.delete(id);
    }

    @PutMapping(value = "/rekviziti/{id}")
    public ResponseEntity<TematskiRekvizit> updateRekvizit(@PathVariable("id") String id, @Valid @RequestBody TematskiRekvizit t){
        TematskiRekvizit rekvizitData = this.rekvizitRepository.findOne(id);

        if(rekvizitData == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        rekvizitData.setCena(t.getCena());
        rekvizitData.setIme(t.getIme());
        rekvizitData.setOpis(t.getOpis());
        rekvizitData.setRezervisan(t.isRezervisan());

        TematskiRekvizit updatedRekvizit = this.rekvizitRepository.save(rekvizitData);

        return new ResponseEntity<>(updatedRekvizit, HttpStatus.OK);
    }
}

