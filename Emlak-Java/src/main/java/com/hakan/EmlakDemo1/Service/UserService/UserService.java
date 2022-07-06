package com.hakan.EmlakDemo1.Service.UserService;

import com.hakan.EmlakDemo1.Models.User;
import com.hakan.EmlakDemo1.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;


    @Override

    public List<User> getAllUser() {

        return userRepository.findAll();
    }

    @Override

    public void saveUser(User user) {
        userRepository.save(user);
    }
    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

    @Override

    public User getByIdUser(Integer id) {

        return userRepository.findById(id).get();
    }
}



