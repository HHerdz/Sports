import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product1, Productos } from '../../services/products';

@Component({
  selector: 'app-ropa',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './ropa.html',
  styleUrl: './ropa.css'
})
export class ropa {
  productos: Product1[] = [];

  constructor(private productService: Productos) {
    this.productos = this.productService.getProducts();
  }

}

