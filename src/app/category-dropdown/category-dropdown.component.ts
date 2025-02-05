import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css']
})
export class CategoryDropdownComponent implements OnInit {
  categories: any[] = [];
  selectedCategory: any = null;
  defaultCategory = { text: '-- Select --', value: null };
  categoryControl = new FormControl(this.defaultCategory.value, Validators.required);

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any[]) => {
        this.categories = [this.defaultCategory, ...data];
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  onCategoryChange(event: any): void {
    this.selectedCategory = event;
    // Handle any additional logic on category change
  }
}

