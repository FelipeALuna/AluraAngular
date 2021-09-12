import { TransferenciaService } from './../services/transferencia.service';
import { Component,OnInit, Output,EventEmitter } from '@angular/core';
import { Transferencia } from '../models/Transferencia.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir:EventEmitter<any> = new EventEmitter();

  valor!:number;
  destino!:number;
  constructor(private service:TransferenciaService,private router:Router) { }

  ngOnInit(): void {
  }
  transferir(){
    const valorEmitir:Transferencia = {destino:this.destino,valor:this.valor};
    this.service.adicionar(valorEmitir).subscribe(resultado=>{
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    error=>{
      console.error(error)
    });
  }
  limparCampos(){
    this.valor=0;
    this.destino= 0 ;
  }
}
