package com.cstracker.trackingapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


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
        this.first_name = first_name;
    }

    public void setLastName(String last_name) {
        this.last_name = last_name;
    }

    public void setScrumMaster(boolean scrum_master) {
        this.scrum_master = scrum_master;
    }
}
