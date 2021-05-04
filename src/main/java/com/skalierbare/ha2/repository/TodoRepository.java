package com.skalierbare.ha2.repository;

import com.skalierbare.ha2.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
}
