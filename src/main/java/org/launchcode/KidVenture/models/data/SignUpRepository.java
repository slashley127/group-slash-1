package org.launchcode.KidVenture.models.data;

import org.launchcode.KidVenture.models.SignIn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignInRepository extends JpaRepository<SignIn, Integer> {
}
