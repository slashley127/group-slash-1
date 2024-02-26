package org.launchcode.KidVenture.models.data;

import org.launchcode.KidVenture.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public Optional<User> getUserById(Long id){
        return userRepository.findById(id);
    }

    public User createUser(User user){
        user.setPwHash(encoder.encode(user.getPwHash()));
        return userRepository.save(user);
    }
}
