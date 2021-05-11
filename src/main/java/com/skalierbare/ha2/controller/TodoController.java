package com.skalierbare.ha2.controller;

import com.skalierbare.ha2.entity.Todo;
import com.skalierbare.ha2.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/editTodo")
    public Todo editTodo(@RequestHeader int id, @RequestBody Todo todo) {
        Todo todoToEdit = todoRepository.getOne(id);
        todoToEdit.setDescription(todo.getDescription());
        todoToEdit.setProgress(todo.getProgress());
        todoToEdit.setDeadline(todo.getDeadline());
        return todoToEdit;
    }


    @DeleteMapping("/deleteTodo")
    public String deleteTodo(@RequestBody Todo todo) {
        todoRepository.delete(todo);
        return "deleted.";
    }
}
