package com.example.projeto_api.controllers;


import com.example.projeto_api.domain.user.User;
import com.example.projeto_api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UserController {
    public ResponseEntity<String> getUser(){
        return ResponseEntity.ok("sucesso!");
    }
    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
