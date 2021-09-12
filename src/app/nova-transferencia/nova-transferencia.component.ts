

import { Component,OnInit, Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir:EventEmitter<any> = new EventEmitter();
  
  valor!:number;
  destino!:number;
  constructor() { }

  ngOnInit(): void {
  }
  transferir(){
    console.log('O valor dessa variavel é : ' + this.valor)
    console.log(`o destino é ${this.destino}`)
    this.aoTransferir.emit({valor:this.destino,destino:this.valor})
  }
  limparCampos(){
    this.destino=0;
    this.destino= 0;
  }
}
