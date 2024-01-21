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
@RequestMapping("activities")
public class ActivityController {

    private ActivityRepository activityRepository;
    public ActivityController(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @GetMapping
    public List<Activity> getActivities() {
        return activityRepository.findAll();
            }


   //Will allow us to display a particular activity

    @GetMapping("/{id}")
    public Activity getActivity(@PathVariable int id) {
        return activityRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    //will allow us to create an activity

    @PostMapping
    public ResponseEntity createActivity(@Valid @RequestBody Activity activity) throws URISyntaxException {
        Activity savedActivity = activityRepository.save(activity);
        return ResponseEntity.created(new URI("/activities/" + savedActivity.getId())).body(savedActivity);
    }

  //will allow us to update/edit an activity
  @PutMapping("/{id}")
  public ResponseEntity updateActivity(@PathVariable int id, @RequestBody Activity activity) {
      Activity currentActivity = activityRepository.findById(id).orElseThrow(RuntimeException::new);
      currentActivity.setName(activity.getName());
      currentActivity.setChild(activity.getChild());
      currentActivity.setMonth(activity.getMonth());
      currentActivity.setDay(activity.getDay());
      currentActivity.setYear(activity.getYear());
      currentActivity.setTypeOfActivity(activity.getTypeOfActivity());
      currentActivity.setDurationOfActivity(activity.getDurationOfActivity());
      return ResponseEntity.ok(currentActivity);
  }
//will allow us to delete an activity

    @DeleteMapping("/{id}")
    public ResponseEntity deleteActivity(@PathVariable int id) {
        activityRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}






