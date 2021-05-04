package com.skalierbare.ha2.controller;

import com.skalierbare.ha2.entity.Todo;
import com.skalierbare.ha2.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {

    @Autowired
    TodoRepository todoRepository;

    @GetMapping("/getTodos")
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @PostMapping("/addTodo")
    public List<Todo> addTodo(@RequestBody Todo todo) {
        todoRepository.save(todo);
        return todoRepository.findAll();
    }

}