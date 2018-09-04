package posetime.filmovi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmoviServiceImpl implements FilmoviService {

    @Autowired
    private FilmoviRepository filmoviRepository;

    @Override
    public List<Filmovi> findAll(){
        List<Filmovi> film = this.filmoviRepository.findAll();
        return film;
    }

    @Override
    public Filmovi findOne(String id){
        Filmovi film = this.filmoviRepository.findOne(id);
        return film;
    }

    @Override
    public Filmovi create(Filmovi film) throws Exception {
        Filmovi savedFilm = this.filmoviRepository.insert(film);
        return savedFilm;

    }

    @Override
    public Filmovi update(Filmovi film) throws Exception {
        Filmovi filmUpdt = this.filmoviRepository.findOne(film.getId());

        if(filmUpdt == null){
            throw new Exception("Nije pronadjen film.");
        }

        filmUpdt.setNaziv(film.getNaziv());
        filmUpdt.setGlumci(film.getGlumci());
        filmUpdt.setOpis((film.getOpis()));
        filmUpdt.setZanr(film.getZanr());
        filmUpdt.setReditelj(film.getReditelj());
        filmUpdt.setTrajanje(film.getTrajanje());
        filmUpdt.setPoster(film.getPoster());
        filmUpdt.setOcena(film.getOcena());
        filmUpdt.setOpis(film.getOpis());
        filmUpdt.setSala(film.getSala());
        filmUpdt.setTermin(film.getTermin());
        filmUpdt.setCena(film.getCena());
        filmUpdt.setProjekcije(film.getProjekcije());

        Filmovi updateFilm = this.filmoviRepository.save(filmUpdt);
        return updateFilm;
    }

    @Override
    public void delete(String id) {
        this.filmoviRepository.delete(id);
    }

}
