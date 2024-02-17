package org.launchcode.KidVenture.controllers;

import jakarta.persistence.EntityNotFoundException;
import org.launchcode.KidVenture.models.NonScreenTimeActivity;
import org.launchcode.KidVenture.models.User;
import org.launchcode.KidVenture.models.data.ActivityRepository;
import org.launchcode.KidVenture.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class FavoriteFeatureController {
    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private UserRepository userRepository;



    @PostMapping("/favorite")
    public ResponseEntity<String> favoriteActivity(@RequestBody FavoriteRequest request){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User is not found"));
        NonScreenTimeActivity activity = activityRepository.findyById(activityId)
                .orElseThrow(() -> new EntityNotFoundException("Activity is not found")):
        return ResponseEntity.ok("Your activity has been favorited successfully!");

        user.addFavoriteActivity(activity);
        userRepository.save(user);
    }
}
