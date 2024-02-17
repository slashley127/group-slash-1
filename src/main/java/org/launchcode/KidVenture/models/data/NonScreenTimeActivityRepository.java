package org.launchcode.KidVenture.models.data;

import org.launchcode.KidVenture.models.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface NonScreenTimeActivityRepository extends JpaRepository<Activity, Integer> {
}
