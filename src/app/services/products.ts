import { Injectable } from '@angular/core';
import { get } from 'node:http';

export interface Product1 {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Productos{
  private productos: Product1[] = [
    {
      id: 1,
      nombre: 'Nike Air Max 270 Hombre',
      precio: 429950,
      imagen: 'img/p1.jpg',
    },
    {
      id: 2,
      nombre: 'Adidas Dropset 3 Training Shoes',
      precio: 579950,
      imagen: 'img/p3.jpg',
    },
    {
      id: 3,
      nombre: 'Under Armour Tech 2.0 T-Shirt',
      precio: 99950,
      imagen: 'img/p4.jpg',
    },
    {
      id: 4,
      nombre: 'New Balance Men-s 460 V4',
      precio: 359950,
      imagen: 'img/p5.jpg',
    },
    {
      id: 5,
      nombre: 'Leggings Lululemon',
      precio: 111950,
      imagen: 'img/p6.jpg',
    },
    {
      id: 6,
      nombre: 'Camiseta ASICS Hombre',
      precio: 359950,
      imagen: 'img/p7.jpg',
    },
    {
      id: 7,
      nombre: 'Reebok Nano X3 Entrenamiento',
      precio: 499950,
      imagen: 'img/p17.jpg',
    },
    {
      id: 8,
      nombre: 'Puma Ultra Match FG/AG',
      precio: 379950,
      imagen: 'img/p18.jpg',
    },
    {
      id: 9,
      nombre: 'Adidas Predator League',
      precio: 459950,
      imagen: 'img/p19.jpg',
    },
    {
      id: 10,
      nombre: 'Lululemon Define Jacket',
      precio: 499950,
      imagen: 'img/p20.jpg',
    },
    {
      id: 11,
      nombre: 'ASICS Gel Nimbus 26',
      precio: 729950,
      imagen: 'img/p21.jpg',
    },
    {
      id: 11,
      nombre: 'Nike Dri-FIT Challenger Shorts',
      precio: 189950,
      imagen: 'img/p22.jpg',
    },
    {
      id: 12,
      nombre: 'Nike Phantom (FV6335-100)',
      precio: 104950,
      imagen: 'img/p2.jpg',
    },
    {
      id: 13,
      nombre: 'Molten F9A2000 Futsal Ball',
      precio: 73950,
      imagen: 'img/p8.jpg',
    },
    {
      id: 14,
      nombre: 'Raqueta Wilson Blade 100UL V9',
      precio: 569950,
      imagen: 'img/p9.jpg',
    },
    {
      id: 15,
      nombre: 'Raqueta Head Pro',
      precio: 1071950,
      imagen: 'img/p10.jpg',
    },
    {
      id: 16,
      nombre: 'Balón Baloncesto Spalding',
      precio: 279950,
      imagen: 'img/p11.jpg',
    },
    {
      id: 17,
      nombre: 'Pesas Rusas Sportfitness 4 KG',
      precio: 50950,
      imagen: 'img/p12.jpg',
    },
    {
      id: 18,
      nombre: 'Raqueta Bádminton Yonex',
      precio: 829950,
      imagen: 'img/p13.jpg',
    },
    {
      id: 19,
      nombre: 'Wilson NBA DRV Balón Outdoor',
      precio: 199950,
      imagen: 'img/p24.jpg',
    },
    {
      id: 20,
      nombre: 'Balón Voleibol Molten V5M5000',
      precio: 389950,
      imagen: 'img/p25.jpg',
    },
    {
      id: 21,
      nombre: 'Balón Voleibol Mikasa V200W',
      precio: 419950,
      imagen: 'img/p26.jpg',
    },
    {
      id: 22,
      nombre: 'Spalding TF-1000 Legacy',
      precio: 329950,
      imagen: 'img/p27.jpg',
    },
    {
      id: 23,
      nombre: 'Rogue Echo Bike V3.0',
      precio: 3230000,
      imagen: 'img/p14.jpg',
    },
    {
      id: 24,
      nombre: 'Concept2 RowErg PM5',
      precio: 4190000,
      imagen: 'img/p15.jpg',
    },
    {
      id: 25,
      nombre: 'Hammer Strength Iso Lateral Bench',
      precio: 12600000,
      imagen: 'img/p16.jpg',
    },
    {
      id: 26,
      nombre: 'Technogym MyRun Cinta de Correr',
      precio: 104950,
      imagen: 'img/p28.jpg',
    },
    {
      id: 27,
      nombre: 'Life Fitness F3 Cinta de Correr',
      precio: 15200000,
      imagen: 'img/p29.jpg',
    },
    {
      id: 28,
      nombre: 'Precor EFX 225 Elíptica',
      precio: 11990000,
      imagen: 'img/p30.jpg',
    },
    {
      id: 29,
      nombre: 'Cybex R Series Bicicleta Estática',
      precio: 10890000,
      imagen: 'img/p31.jpg',
    },
    {
      id: 30,
      nombre: 'Rogue Fitness Monster Rack RM-6',
      precio: 17450000,
      imagen: 'img/p32.jpg',
    }
  ];

  constructor() {}
  getProducts(): Product1[] {
    return this.productos;
  }
}
