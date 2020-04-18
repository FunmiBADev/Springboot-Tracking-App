package com.cstracker.trackingapp.controller;

import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name ="users")
public class User {
    @Id
    @GeneratedValue
    private Long user_id;
    private String first_name;
    private String last_name;
    private String username;
    private String email;
    private String password;
    private boolean admin;
    private boolean scrum_master;

    public void setFirstName(String first_name) {
    }

    public void setLastName(String last_name) {
    }

    public void setUsername(String username) {
    }

    public void setEmail(String email) {
    }

    public void setPassword(String password) {
    }



    public void setScrumMaster(boolean scrum_master) {
    }

    public void setAdmin(boolean admin) {
    }
}
