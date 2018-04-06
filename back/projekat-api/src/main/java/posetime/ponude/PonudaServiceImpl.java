package posetime.ponude;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PonudaServiceImpl implements PonudaService{
    @Autowired
    private PonudeRepository ponudeRepository;

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
    public Ponuda findOne(String id) {
        Ponuda ponuda = this.ponudeRepository.findOne(id);
        return ponuda;
    }

    @Override
    public Ponuda create(Ponuda ponuda) throws Exception {
        //setovanje userName na trenutno ulogovanog usera
        UserDetails userDetails = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        ponuda.setUserName(userDetails.getUsername());
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
        ponudaToUpdate.setUserName(ponuda.getUserName());
        ponudaToUpdate.setOglasId(ponuda.getOglasId());

        Ponuda updatedPonuda = this.ponudeRepository.save(ponudaToUpdate);
        return updatedPonuda;
    }

    @Override
    public void delete(String id) {
        this.ponudeRepository.delete(id);
    }
}
