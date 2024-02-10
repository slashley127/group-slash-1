package org.launchcode.KidVenture.controllers;
import jakarta.validation.Valid;
import org.launchcode.KidVenture.models.EmergencyContact;
import org.launchcode.KidVenture.models.data.EmergencyContactRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/emergencycontacts")
@CrossOrigin(origins = "http://localhost:3000") //kept running into a 500 Proxy Error. Fixed when running backend and adding this annotation to avoid CORS issues.
public class EmergencyContactController {


    private final EmergencyContactRepository emergencyContactRepository;

    @Autowired
    public EmergencyContactController(EmergencyContactRepository emergencyContactRepository) {
        this.emergencyContactRepository = emergencyContactRepository;
    }

    //list all emergencies contacts
    @GetMapping
    public List<EmergencyContact> getAllEmergencyContacts() {
        return emergencyContactRepository.findAll();
    }

    // get a specific emergency contact or else create a new one
    @GetMapping("/{id}")
    public EmergencyContact getEmergencyContact(@PathVariable Integer id) {
        return emergencyContactRepository.findById(id).orElseThrow(RuntimeException :: new);
    }

    // create a new emergency contact
    @PostMapping
    public ResponseEntity createEmergencyContact(@RequestBody EmergencyContact emergencyContact) throws URISyntaxException {
        EmergencyContact savedEmergencyContact = emergencyContactRepository.save(emergencyContact);
        return ResponseEntity.created(new URI("/emergencycontacts/" + savedEmergencyContact.getId())).body(savedEmergencyContact);
    }

    // update/edit emergency contact
    @PutMapping("/{id}")
    public ResponseEntity updateEmergencyContact(@PathVariable Integer id, @RequestBody EmergencyContact emergencyContact) {
        EmergencyContact currentEmergencyContact = emergencyContactRepository.findById(id).orElseThrow(RuntimeException::new);
        currentEmergencyContact.setFirstName(emergencyContact.getFirstName());
        currentEmergencyContact.setLastName(emergencyContact.getLastName());
        currentEmergencyContact.setPhoneNumber(emergencyContact.getPhoneNumber());
        currentEmergencyContact.setRelationship(emergencyContact.getRelationship());
        currentEmergencyContact.setWorkplace(emergencyContact.getWorkplace());
        currentEmergencyContact.setEmail(emergencyContact.getEmail());
        currentEmergencyContact.setAge(emergencyContact.getAge());
        currentEmergencyContact.setAddress(emergencyContact.getAddress());
        currentEmergencyContact.setState(emergencyContact.getState());
        currentEmergencyContact.setZip(emergencyContact.getZip());
        currentEmergencyContact.setNotes(emergencyContact.getNotes());

        return ResponseEntity.ok(currentEmergencyContact);
    }


    // delete emergency contact
    @DeleteMapping("/{id}")
    public ResponseEntity deleteEmergencyContact(@PathVariable Integer id) {
        emergencyContactRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }


}
