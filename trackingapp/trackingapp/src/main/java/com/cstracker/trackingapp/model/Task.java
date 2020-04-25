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
   
    private Instant due_date;
  
    private String created_by;
    
    private String assigned_to;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;


}
