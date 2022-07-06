package com.hakan.EmlakDemo1.Service.IlanService;
import com.hakan.EmlakDemo1.Models.Ilan;
import com.hakan.EmlakDemo1.Models.User;
import com.hakan.EmlakDemo1.Repositories.IlanRepository;
import com.hakan.EmlakDemo1.Repositories.UserRepository;
import com.hakan.EmlakDemo1.Service.UserService.UserService;
import com.hakan.EmlakDemo1.enumeration.EnumIlanTuru;
import com.hakan.EmlakDemo1.enumeration.EnumIsinma;
import com.hakan.EmlakDemo1.enumeration.EnumOdaSayisi;
import com.hakan.EmlakDemo1.rest.IlanRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class IlanServiceImpl implements IIlanService {

    private final IlanRepository ilanRepository;
    private final UserService userService;
    private final UserRepository userRepository;

    @Override
    public List<Ilan> getAllILan() {
        return ilanRepository.findAll();
    }

    @Override
    public void createIlanRecord(IlanRequest request) {

        log.info("Ilan eklenecek fonk...{}", LocalDateTime.now());

        Ilan ilan = Ilan.builder()
                .aciklama(request.getAciklama())
                .baslik(request.getBaslik())
                .binaKati(Integer.valueOf(request.getBinaKati()))
                .ilanAdres(request.getIlanAdres())
                .ilanTuru(EnumIlanTuru.getById(request.getIlanTuru()))
                .isinma(EnumIsinma.getById(request.getIsinma()))
                .kullanimAlani(Integer.valueOf(request.getKullanimAlani()))
                .odaSayisi(EnumOdaSayisi.getById(request.getOdaSayisi()))
                .build();

        Optional<User> optionalUser = userRepository.findById(request.getUserId());
        optionalUser.ifPresent(ilan::setUser);

        ilanRepository.save(ilan);
    }



    @Override
    public void deleteILan(Integer id) {
        ilanRepository.deleteById(id);
    }

    @Override
    public Ilan getByIdILan(Integer id) {
         return ilanRepository.findById(id).get();
    }
}
