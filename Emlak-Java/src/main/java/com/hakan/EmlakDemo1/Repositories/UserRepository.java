package com.hakan.EmlakDemo1.Repositories;

import com.hakan.EmlakDemo1.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
