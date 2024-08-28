import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe((data: any[]) => {
        this.products = data.map(item => ({
          title: item.title,
          price: item.price,
          image: item.image,
          stock: Math.floor(Math.random() * 10),
          isNew: Math.random() > 0.7
        }));
      });
  }
}
