package com.nuwanlwx.rest.webservices.restwebservice.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	private static List<Todo> todos =new ArrayList<Todo>();
	private static int idCounter =0;
	static {
		todos.add(new Todo(++idCounter,"Subjects","Learn java",new Date(),false));
		todos.add(new Todo(++idCounter,"Subjects","Learn micro services",new Date(),false));
		todos.add(new Todo(++idCounter,"Subjects","Learn angular",new Date(),false));
	}
	public List<Todo> findAll(){
		return todos;
	
	}
}
