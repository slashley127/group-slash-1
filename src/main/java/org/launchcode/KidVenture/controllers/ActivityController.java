package org.launchcode.KidVenture.controllers;
import org.launchcode.KidVenture.models.Activity;
import org.launchcode.KidVenture.models.Child;
import org.launchcode.KidVenture.models.data.ActivityRepository;
import org.launchcode.KidVenture.models.data.ChildRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/activities")
public class ActivityController {

    private final ActivityRepository activityRepository;

    private final ChildRepository childRepository;
    public ActivityController(ActivityRepository activityRepository, ChildRepository childRepository) {
        this.activityRepository = activityRepository;
        this.childRepository = childRepository;
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
    public ResponseEntity createActivity(@RequestBody Activity activity) throws URISyntaxException {
        Activity savedActivity = activityRepository.save(activity);
        return ResponseEntity.created(new URI("/activities/" + savedActivity.getId())).body(savedActivity);
    }

    //will allow us to update/edit an activity
    @PutMapping("/{id}")
    public ResponseEntity updateActivity(@PathVariable int id, @RequestBody Activity activity) {
        Activity currentActivity = activityRepository.findById(id).orElseThrow(RuntimeException::new);
        currentActivity.setNameOfActivity(activity.getNameOfActivity());
        currentActivity.setChild(activity.getChild());
        currentActivity.setDate(activity.getDate());
        currentActivity.setDurationOfActivity(activity.getDurationOfActivity());
        currentActivity.setTypeOfActivity(activity.getTypeOfActivity());
        currentActivity.setMood(activity.getMood());
        activityRepository.save(currentActivity);
        return ResponseEntity.ok(currentActivity);
    }
//will allow us to delete an activity

    @DeleteMapping("/{id}")
    public ResponseEntity deleteActivity(@PathVariable int id) {
        activityRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}







