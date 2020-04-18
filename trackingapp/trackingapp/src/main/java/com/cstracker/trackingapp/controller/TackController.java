package com.cstracker.trackingapp.controller;

import com.cstracker.trackingapp.model.Task;
import com.cstracker.trackingapp.repository.TaskRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api")

public class TackController {
    private TaskRepository taskRepo;

    public TackController(TaskRepository taskRepo) {
        super();
        this.taskRepo = taskRepo;
    }

    @GetMapping("/dashboard")
    Collection<Task> tasks(){
        return taskRepo.findAll();
//        select all from tasks
    }


}
