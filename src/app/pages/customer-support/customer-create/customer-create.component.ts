import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})

export class CustomerCreateComponent { 


  mostrarFormularioQuejas = false;
  mostrarFormularioQuejasAdvertencia = false;


  mostrarFormulario() {
    this.mostrarFormularioQuejas = true;
  }

  ocultarFormulario() {
    this.mostrarFormularioQuejas = false;
  }

  mostrarFormularioAdvertencia() {
    this.mostrarFormularioQuejasAdvertencia = true;
    this.abrirModalAdvertencia(); // Llama al método para abrir el modal de advertencia
  }

  ocultarFormularioAdvertencia() {
    this.mostrarFormularioQuejasAdvertencia = false;
  }

  abrirModalAdvertencia() {
    const modal = new bootstrap.Modal(document.getElementById('modalAdvertencia'), {
      backdrop: 'static', // Evita que se cierre haciendo clic fuera del modal
      keyboard: false // Evita que se cierre al presionar la tecla Esc
    });
    modal.show();
  }
}
