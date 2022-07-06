package com.hakan.EmlakDemo1.Service.IlanService;

import com.hakan.EmlakDemo1.Models.Ilan;
import com.hakan.EmlakDemo1.rest.IlanRequest;

import java.util.List;

public interface IIlanService {
    List<Ilan> getAllILan();

   void createIlanRecord(IlanRequest request);



    void deleteILan(Integer id);

    Ilan getByIdILan(Integer id);
}
