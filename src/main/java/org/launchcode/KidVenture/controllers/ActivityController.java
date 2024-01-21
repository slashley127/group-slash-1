package org.launchcode.KidVenture.controllers;
import jakarta.validation.Valid;
import org.launchcode.KidVenture.models.Activity;
import org.launchcode.KidVenture.models.Month;
import org.launchcode.KidVenture.models.TypeOfActivity;
import org.launchcode.KidVenture.models.data.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("kidVenture")
@SuppressWarnings("unchecked")
public class ActivityController {

    private final Logger log = LoggerFactory.getLogger(ActivityController.class);

    @Autowired
     ActivityRepository activityRepository;

    @GetMapping("/activities")
    Collection<Activity> activities() {
        return (Collection<Activity>) activityRepository.findAll();
            }


   //Will allow us to display a particular activity

    @GetMapping ("/activity/{id}")
    ResponseEntity<?> getGroup(@PathVariable int id) {
        Optional<Activity> activity = activityRepository.findById(id);
        return activity.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    //will allow us to create an activity
    @PostMapping("/activity")
    ResponseEntity<Activity> createGroup(@Valid @RequestBody Activity activity) throws URISyntaxException {
        log.info("Request to create activity: {}", activity);
        Activity result = (Activity) activityRepository.save(activity);
        return ResponseEntity.created(new URI("/kidVenture/activity/" + result.getId()))
                .body(result);
    }

  //will allow us to update/edit an activity
    @PutMapping("/activity/{id}")
    ResponseEntity<Activity> updateGroup(@Valid @RequestBody Activity activity) {
        log.info("Request to update activity: {}", activity);
        Activity result = (Activity) activityRepository.save(activity);
        return ResponseEntity.ok().body(result);
    }
//will allow us to delete an activity
    @DeleteMapping("/activity/{id}")
    public ResponseEntity<?> deleteActivity(@PathVariable int id) {
        log.info("Request to delete activity: {}", id);
        activityRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}



