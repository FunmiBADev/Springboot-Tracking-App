package com.cstracker.trackingapp.controller;

import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name ="tasks")
public class Task {
    @Id
    @GeneratedValue
    private Long task_id;
   
    private String title;
    
    private String description;
    
    private String priority;

    private String category;
   
    private Instant date_added;
   
    private String status;
   
    private String due_date;
  
    private String created_by;
    
    private String assigned_to;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;

    public void setTitle(String title) {
    }

    public void setDescription(String description) {
    }

    public void setPriority(String priority) {
    }

    public void setCategory(String category) {
    }

    public void setDateadded(Instant date_added) {
    }

    public void setStatus(String status) {
    }

  
    public void setCreatedBy(String created_by) {
    }

    public void setAssignedTo(String assigned_to) {
    }

    public void setDuedate(String due_date) {
    }
}
