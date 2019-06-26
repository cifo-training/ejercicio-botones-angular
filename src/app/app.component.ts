import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular02';

  textoSaludar = 'Este boton esta habilitado';
  textoActivar = 'Activar botón de saludo';
  textoDesactivar = 'Este botón está desactivado';

  btnAzulDesactivado = true;
  btnVerdeDesactivado = false;
  btnRojoDesactivado = true;

  mostrarAviso(){
    alert('Has pulsado el botón');
  }
  activarSaludo(){
    this.textoActivar = "Este botón está habilitado";
    this.btnVerdeDesactivado = true;

    this.textoDesactivar= "Desactivar botón de saludo";
    this.btnRojoDesactivado = false;

    this.textoSaludar= "Muestra el saludo en un alert";
    this.btnAzulDesactivado = false;
  }
  desactivarSaludo(){

    this.textoDesactivar = "Este botón está deshabilitado";
    this.btnRojoDesactivado = true;

    this.textoActivar = "Este botón está habilitado";
    this.btnVerdeDesactivado = false;

    this.textoSaludar = "Este botón está deshabilitado";
    this.btnAzulDesactivado = true;

  }
}
