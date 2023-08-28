package com.jannedekraker.minirecipesapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DatabaseSeeder {

    @Bean
    public CommandLineRunner initDatabase(RecipeRepository recipeRepository) {
        return args -> {
            if (recipeRepository.count() == 0) {
                seedDatabase(recipeRepository);
            }
        };
    }

    private void seedDatabase(RecipeRepository recipeRepository) {
        Recipe recipe1 = new Recipe("Pasta Carbonara");
        Recipe recipe2 = new Recipe("Chocolate Cake");

        recipeRepository.saveAll(List.of(recipe1, recipe2));

    }
}