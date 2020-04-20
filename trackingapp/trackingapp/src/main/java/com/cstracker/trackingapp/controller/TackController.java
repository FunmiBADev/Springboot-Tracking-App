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

public class TackController { // why is it "TackController"? (TaskController?)
    private TaskRepository taskRepo;

    public TackController(TaskRepository taskRepo) {
        super();
        this.taskRepo = taskRepo;
    }

    @GetMapping("/dashboard")
    Collection<Task> tasks(){
        return taskRepo.findAll(); //findAll is a JPA method
//        select all from tasks
    }

//    Search task by id (can repeat by search by username, status, category, priority)
    @GetMapping("/task/{task_id}")
    ResponseEntity<?> getCategory(@PathVariable Long task_id){
        Optional<Task> task = taskRepo.findById(task_id);
        return task.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @PostMapping("/task")
    ResponseEntity<Task> createTask(@Valid @RequestBody Task task) throws URISyntaxException {
        Task result= taskRepo.save(task);
        return ResponseEntity.created(new URI("/api/task" + result.getTask_id())).body(result);

    }


    @PutMapping("/task /{task_id}")
    ResponseEntity<Task> updateCategory(@Valid @RequestBody Task task){
        Task result= taskRepo.save(task);
        return ResponseEntity.ok().body(result);
    }



    @DeleteMapping("/task/{task_id}")
    ResponseEntity<?> deleteTask(@PathVariable Long task_id){
        taskRepo.deleteById(task_id);
        return ResponseEntity.ok().build();
    }


}
