package com.jannedekraker.minirecipesapp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity

public class Recipe {
    @Id
    @GeneratedValue
    private long id;

    private String name;

    public long getId() {
        return id;
    }
// not a setId because it is an @GeneratedValue

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
