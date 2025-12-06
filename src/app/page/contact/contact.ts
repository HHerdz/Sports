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
      nombre: (this.f.nombre.value || '').toString().trim(),
      email: (this.f.email.value || '').toString().trim(),
      password: (this.f.password.value || '').toString().trim(),
      direccion: (this.f.direccion.value || '').toString().trim(),
      ciudad: (this.f.ciudad.value || '').toString().trim(),
      departamento: (this.f.departamento.value || '').toString().trim(),
      barrio: (this.f.barrio.value || '').toString().trim(),
      terminos: (this.f.terminos.value || '').toString().trim(),
    };
    const contenido = `
===== DATOS DEL CONTACTO =====
Nombre: ${data.nombre}
Email: ${data.email}
Contraseña: ${data.password}
Dirección: ${data.direccion}
Ciudad: ${data.ciudad}
Departamento: ${data.departamento}
Barrio: ${data.barrio}
----------------------------------
Fecha: ${new Date().toLocaleString('es-ES')}
`;

      const blob = new Blob([contenido], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Contacto_${data.nombre}_${Date.now()}.txt`;
      link.click();
      window.URL.revokeObjectURL(url);
  }
}
