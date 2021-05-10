package com.skalierbare.ha2.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Todo {

    @Id
    @GeneratedValue
    private int id;
    private String description;
    private int progress;
    private boolean done;
    private String deadline;
}
