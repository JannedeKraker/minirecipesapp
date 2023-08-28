package com.jannedekraker.minirecipesapp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity

public class Recipe {
    @Id
    @GeneratedValue
    private long id;

    private String title;

    public Recipe() {
    }

    public Recipe(String title) {
        this.title = title;
    }

    public long getId() {
        return id;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}

