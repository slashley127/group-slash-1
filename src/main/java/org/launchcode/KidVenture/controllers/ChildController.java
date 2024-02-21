package org.launchcode.KidVenture.controllers;




import org.apache.coyote.Response;
import org.launchcode.KidVenture.models.Child;
import org.launchcode.KidVenture.models.data.ChildRepository;
import org.launchcode.KidVenture.models.data.ChildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/child")
public class ChildController {


    @Autowired
    private ChildService childService;


    @GetMapping
    public ResponseEntity<List<Child>> getAllChildProfiles(){
        List<Child> childProfiles = childService.getAllChild();
        return new ResponseEntity<>(childProfiles, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Child> getChildById(@PathVariable Long id){
        Optional<Child> childProfile = childService.getChildById(id);
        return childProfile.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Child> createChild(@RequestBody Child child){
        Child createdChild = childService.createChild(child);
        return new ResponseEntity<>(createdChild, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Child> updateChild(@PathVariable Long id, @RequestBody Child child){
        Child updatedChildProfile = childService.updateChild(id, child);
        return new ResponseEntity<>(updatedChildProfile, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChild(@PathVariable Long id){
        childService.deleteChild(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}