package com.cstracker.trackingapp.controller;

import com.cstracker.trackingapp.model.Task;
import com.cstracker.trackingapp.repository.TaskRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

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

//    Search task by id (can repeat by search by username, status, category, priority)
    @GetMapping("/search_task/{task_id}")
    ResponseEntity<?> getCategory(@PathVariable Long task_id){
        Optional<Task> task = taskRepo.findById(task_id);
        return task.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @PostMapping("/add_task")
    ResponseEntity<Task> createTask(@Valid @RequestBody Task task) throws URISyntaxException {
        Task result= taskRepo.save(task);
        return ResponseEntity.created(new URI("/api/dashboard" + result.getTask_id())).body(result);

    }


}
