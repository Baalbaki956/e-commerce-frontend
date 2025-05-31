import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { CardComponent } from "../../core/components/card/card.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent],
  templateUrl: 'home.component.html',
  styles: ``
})
export class HomeComponent {
  categories: Category[] = [
    { name: "Electronics", imageUrl: "./laptop.png", itemCount: 10, bgColor: "#e0f7fa" },
    { name: "Fashion", imageUrl: "./dress.png", itemCount: 10, bgColor: "#fce4ec" },
    { name: "Health & Beauty", imageUrl: "./makeup.png", itemCount: 10, bgColor: "#f3e5f5" },
    { name: "Home & Garden", imageUrl: "garden-tools.png", itemCount: 10, bgColor: "#e8f5e9" },
    { name: "Toys & Games", imageUrl: "toys.png", itemCount: 10, bgColor: "#fff9c4" },
    { name: "Sports", imageUrl: "./sport-gear.webp", itemCount: 10, bgColor: "#f1f8e9" },
    { name: "Food", imageUrl: "./fruit.png", itemCount: 10, bgColor: "#ffecb3" },
  ];
}
