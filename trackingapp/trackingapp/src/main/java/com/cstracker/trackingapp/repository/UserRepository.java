package com.cstracker.trackingapp.repository;


import com.cstracker.trackingapp.controller.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
