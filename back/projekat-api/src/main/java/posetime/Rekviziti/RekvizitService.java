package posetime.Rekviziti;

import java.util.List;

public interface RekvizitService {

    List<TematskiRekvizit> findAll();
    TematskiRekvizit findOne(String id);
    TematskiRekvizit create(TematskiRekvizit rekvizit) throws Exception;
    TematskiRekvizit update(TematskiRekvizit rekvizit) throws Exception;
    void delete(String id);
    

}
