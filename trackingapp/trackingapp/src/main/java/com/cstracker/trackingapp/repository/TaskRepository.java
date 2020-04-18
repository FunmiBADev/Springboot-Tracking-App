package com.cstracker.trackingapp.repository;

import com.cstracker.trackingapp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
    Task findByTitle(String title);
}

