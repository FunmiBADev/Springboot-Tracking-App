package com.cstracker.trackingapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
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


//    public void setDateadded(Instant add_date) {
//        this.date_added = date_added;
//    }

    public void setDueDate(String due_date) {
        this.due_date = due_date;
    }

    public void setCreatedBy(String created_by) {
        this.created_by=created_by;
    }

    public void setAssignedTo(String assigned_to) {
        this.assigned_to = assigned_to;
    }
}
