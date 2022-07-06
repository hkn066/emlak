package com.hakan.EmlakDemo1.Repositories;

import com.hakan.EmlakDemo1.Models.Ilan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface IlanRepository extends JpaRepository<Ilan,Integer>, JpaSpecificationExecutor<Ilan> {
}
