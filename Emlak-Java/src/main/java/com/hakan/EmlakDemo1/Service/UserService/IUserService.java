package com.hakan.EmlakDemo1.Service.UserService;

import com.hakan.EmlakDemo1.Models.User;

import java.util.List;

public interface IUserService {
    List<User> getAllUser();

    void saveUser(User user);


    void deleteUser(Integer id);

    User getByIdUser(Integer id);


}
