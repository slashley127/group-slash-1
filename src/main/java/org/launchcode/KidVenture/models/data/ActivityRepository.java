package org.launchcode.KidVenture.models.data;

import org.launchcode.KidVenture.models.Activity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends CrudRepository<Activity, Integer>{
}
