package com.cstracker.trackingapp;

import com.cstracker.trackingapp.controller.Task;
import com.cstracker.trackingapp.controller.User;
import com.cstracker.trackingapp.repository.TaskRepository;
import com.cstracker.trackingapp.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.Instant;

@SpringBootApplication
public class TrackingappApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrackingappApplication.class, args);
	}

	@Bean
	public CommandLineRunner init(TaskRepository taskRepo, UserRepository userRepo) {
		return args -> {

			Task task1 = createTask(taskRepo,"Create task table", "This table will hold all the data necessary to track the user story",
					"High","Userstory","2020-03-29T17:00:00.000Z","Not Started",
					"2020-03-30T17:00:00.000Z","ftester","ftester");

			Task task2 = createTask(taskRepo,"Create user table", "This table will hold all the data users and their roles and permissions",
					"High","Userstory","2020-03-29T17:00:00.000Z","Not Started",
					"2020-03-30T17:00:00.000Z","ctester","atester");
			User user1 = createUser(userRepo,"Funmi", "Tester", "ftester",
					"ftester@email.com","test123", true, false );
			User user2 = createUser(userRepo,"Chloe", "Tester", "ctester",
					"ctester@email.com","test234", true, true );
			User user3 = createUser(userRepo,"Ariane", "Tester", "atester",
					"atester@email.com","test345", true, false );
		};
	}

	private User createUser(UserRepository userRepo, String first_name, String last_name, String username, String email,
							String password, boolean admin, boolean scrum_master) {
		User user = new User();

		user.setFirstName(first_name);
		user.setLastName(last_name);
		user.setUsername(username);
		user.setEmail(email);
		user.setPassword(password);
		user.setAdmin(admin);
		user.setScrumMaster(scrum_master);

		return userRepo.save(user);
	}

	private Task createTask(TaskRepository taskRepo, String title, String description, String priority,
							String category, String date_added, String status, String due_date, String created_by,
							String assigned_to) {
		Instant add_date = Instant.parse(date_added);
		Task task = new Task();

		task.setTitle(title);
		task.setDescription(description);
		task.setPriority(priority);
		task.setCategory(category);
		task.setDateadded(add_date);
		task.setStatus(status);
		task.setDuedate(due_date);
		task.setCreatedBy(created_by);
		task.setAssignedTo(assigned_to);

		return taskRepo.save(task) ;
	}

}



