package org.launchcode.KidVenture.models.data;
import org.launchcode.KidVenture.models.Child;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChildService {
    @Autowired ChildRepository childRepository;

    public List<Child> getAllChild(){
        return childRepository.findAll();
    }

    public Optional<Child> getChildById(Long id){
        return childRepository.findById(id);
    }


    public Child createChild(Child child){
        return childRepository.save(child);
    }

    public Child updateChild(Long id, Child child){
        child.setId(id);
        return childRepository.save(child);
    }

    public void deleteChild(Long id){
        childRepository.deleteById(id);
    }
}
