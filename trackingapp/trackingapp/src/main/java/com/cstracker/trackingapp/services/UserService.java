package com.cstracker.trackingapp.services;

import com.cstracker.trackingapp.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
