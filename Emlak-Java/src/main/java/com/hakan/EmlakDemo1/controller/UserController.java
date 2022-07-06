package com.hakan.EmlakDemo1.controller;


import com.hakan.EmlakDemo1.Models.User;

import com.hakan.EmlakDemo1.Service.UserService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private IUserService userService;

    @GetMapping("/users")
    public List<User> getAllUser() {

        return userService.getAllUser();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") Integer id) {
        User user = userService.getByIdUser(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
    }

    @PostMapping("/create")
    public void creatUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        userService.saveUser(user);
        return new ResponseEntity(HttpStatus.OK);
    }


}
