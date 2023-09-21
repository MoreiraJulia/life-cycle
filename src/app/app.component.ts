import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra! : Array<Item>
  itemParaSerEditado! : Item
  // itemParaSerEditado

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
      this.listaDeCompra = this.listaService.getListaDeCompra();
      console.log(this.listaDeCompra);
  }

  // Aqui estamos pegando o item que precisa ser edita e adionando ele em um variavel
  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }

  ngDoCheck() {
    console.log('DoCheck foi chamado');
    this.listaService.atualizarLocalStorage();
  }

  deletarItem(id: number){
    const index = this.listaDeCompra.findIndex((item) => item.id === id);
    this.listaDeCompra.splice(index, 1);
  }
  // limparLista(){
  //   this.listaDeCompra = [];
  // }
}
