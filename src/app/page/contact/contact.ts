import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm!: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      ciudad: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      barrio: ['', [Validators.required]],
      terminos: [false, Validators.requiredTrue] 
    });
  }

  get f(): any {
    return this.contactForm.controls;
  }

  cancelar() {
    if (this.submitting) return;
    this.contactForm.reset();
  }

  enviar(): void {
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }

  const data = {
    Nombre: this.f.nombre.value.trim(),
    Email: this.f.email.value.trim(),
    Contraseña: this.f.password.value.trim(),
    Dirección: this.f.direccion.value.trim(),
    Ciudad: this.f.ciudad.value.trim(),
    Departamento: this.f.departamento.value.trim(),
    Barrio: this.f.barrio.value.trim(),
    Terminos: this.f.terminos.value
  };

  const json = JSON.stringify(data, null, 2); // 👉 convierte a JSON con formato bonito

  const blob = new Blob([json], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Contacto_${data.Nombre}_${Date.now()}.json`; // 👈 cambia a .json
  link.click();
  window.URL.revokeObjectURL(url);
}
}