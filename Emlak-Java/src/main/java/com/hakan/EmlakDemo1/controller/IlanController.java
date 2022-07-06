package com.hakan.EmlakDemo1.controller;
import com.hakan.EmlakDemo1.Models.Ilan;
import com.hakan.EmlakDemo1.Service.IlanService.IIlanService;
import com.hakan.EmlakDemo1.rest.IlanRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home")
@CrossOrigin
@RequiredArgsConstructor
public class IlanController {
    private final IIlanService ilanService;

    @GetMapping("/adverts")
    public List<Ilan> getAllILan() {
        return ilanService.getAllILan();
    }

    @GetMapping("/advert/{id}")
    public ResponseEntity<Ilan> getILan(@PathVariable("id") Integer ilanid) {
        Ilan ilan = ilanService.getByIdILan(ilanid);
        return new ResponseEntity<Ilan>(ilan, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteILan(@PathVariable("id") Integer id) {
        ilanService.deleteILan(id);
    }

    @PostMapping("/create")
    public void createILan(@RequestBody IlanRequest request) {
        ilanService.createIlanRecord(request);
    }

   // @PutMapping("/update")
   // public ResponseEntity<?> updateILan(@RequestBody Ilan ilan) {

        //ilanService.createIlanRecord(ilan);
       // return new ResponseEntity<>(HttpStatus.OK);
    //}

}
