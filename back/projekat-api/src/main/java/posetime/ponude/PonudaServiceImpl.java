package posetime.ponude;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import posetime.obavestenja.ObavestenjaService;
import posetime.obavestenja.Obavestenje;
import posetime.oglasi.Oglas;
import posetime.oglasi.OglasService;

import java.util.List;

@Service
public class PonudaServiceImpl implements PonudaService{
    @Autowired
    private PonudeRepository ponudeRepository;

    @Autowired
    private ObavestenjaService obavestenjaService;

    @Autowired
    private OglasService oglasService;
    @Override
    public List<Ponuda> findAll() {
        List<Ponuda> ponude = this.ponudeRepository.findAll();

        return ponude;
    }

    @Override
    public List<Ponuda> findByOglasId(String id) {
         List<Ponuda> ponude = this.ponudeRepository.findByOglasId(id);
         return ponude;
    }

    @Override
    public List<Ponuda> findByUserId(String id) {
        List<Ponuda> ponudeForUser = this.ponudeRepository.findByUserId(id);
        return ponudeForUser;
    }

    @Override
    public List<Ponuda> findByUserName(String username) {
        List<Ponuda> ponundeForUsername = this.ponudeRepository.findByUsername(username + ".com");
        return ponundeForUsername;
    }

    @Override
    public Ponuda findOne(String id) {
        Ponuda ponuda = this.ponudeRepository.findOne(id);
        return ponuda;
    }

    @Override
    public Ponuda create(Ponuda ponuda) throws Exception {
        //setovanje userName na trenutno ulogovanog usera
        UserDetails userDetails = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        ponuda.setUsername(userDetails.getUsername());
        Ponuda savedPonuda = this.ponudeRepository.insert(ponuda);
        return savedPonuda;
    }

    @Override
    public Ponuda update(Ponuda ponuda) throws Exception {
        Ponuda ponudaToUpdate = this.ponudeRepository.findOne(ponuda.getId());
        if(ponudaToUpdate == null){
            throw new Exception("Trazena ponuda nije pronadjena!");
        }

        ponudaToUpdate.setIznos(ponuda.getIznos());
        ponudaToUpdate.setUserId(ponuda.getUserId());
        ponudaToUpdate.setUsername(ponuda.getUsername());
        ponudaToUpdate.setOglasId(ponuda.getOglasId());
        ponudaToUpdate.setIzabrana(ponuda.isIzabrana());
        Ponuda updatedPonuda = this.ponudeRepository.save(ponudaToUpdate);
        return updatedPonuda;
    }

    @Override
    public void delete(String id) {
        this.ponudeRepository.delete(id);
    }

    @Override
    public Ponuda reserve(Ponuda ponuda) {
        Ponuda ponudaToUpdate = this.ponudeRepository.findOne(ponuda.getId());
        Oglas oglasZaPonudu = this.oglasService.findOne(ponuda.getOglasId());

        ponudaToUpdate.setIzabrana(ponuda.isIzabrana());

        List<Ponuda> svePonudeZaOglas = this.ponudeRepository.findByOglasId(ponuda.getOglasId());

        svePonudeZaOglas.stream()
                        .filter(p -> !p.getUsername().equals((ponuda.getUsername())))
                        .forEach(p -> notifyUser(p, "Vasa ponuda za oglas " + oglasZaPonudu.getNaziv() +" nije izabrana"));
        
        notifyUser(ponuda, "Vasa ponuda za oglas " + oglasZaPonudu.getNaziv() +" je izabrana");


        Ponuda savedPonuda = this.ponudeRepository.save(ponudaToUpdate);
        return savedPonuda;
    }

    public void notifyUser(Ponuda p, String text){
        Obavestenje obavestenje = new Obavestenje(text, p.getUsername());
        try{
            Obavestenje createdObavestenje  = this.obavestenjaService.create(obavestenje);
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}
