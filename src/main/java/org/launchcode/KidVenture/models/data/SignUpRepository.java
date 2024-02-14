package org.launchcode.KidVenture.models.data;

import org.launchcode.KidVenture.models.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignUpRepository extends JpaRepository<SignUp, Integer> {
}
