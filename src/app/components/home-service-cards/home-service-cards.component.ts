import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-service-cards',
  templateUrl: './home-service-cards.component.html',
  styleUrls: ['./home-service-cards.component.scss'],
})
export class HomeServiceCardsComponent  implements OnInit {

  services = [
  {
    title: "Desarrollo Web/App",
    message: "Creamos proyectos ajustado a las necesidades del cliente aplicando la mejor tecnología para tener un producto competitivo en el mercado mundial",
  },
  {
    title: "Inteligencia de Negocio",
    message: "Te ayudamos a construir estrategias de negocio a través de los datos reales de la empresa, para mejorar tu producto o servicios y  conocer el cliente para tomar decisiones efectivas.",
  },
  {
    title: "Marketing Digital",
    message: "Desarrollamos estrategias óptimas enfocadas en dar conocer y posicionar negocios en el mercado digital.",
  },
  ]

  constructor() {}
  ngOnInit() {}

  clickSend(){
    var id = document.getElementById("Hablemos");
    if(id){
      id.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"})
    }
  }
}
