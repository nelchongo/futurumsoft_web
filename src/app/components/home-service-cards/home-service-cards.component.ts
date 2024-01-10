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
    message: "Desarrollamos proyectos a medida, adaptados a las necesidades de nuestros clientes, empleando la tecnología más avanzada para asegurar la competitividad de nuestros productos a nivel mundial.",
  },
  {
    title: "Inteligencia de Negocio",
    message: "Facilitamos la construcción de estrategias empresariales mediante el análisis de datos concretos de tu empresa, permitiéndote mejorar tus productos/servicios, comprender a tus clientes y tomar decisiones efectivas.",
  },
  // {
  //   title: "Marketing Digital",
  //   message: "Desarrollamos estrategias óptimas enfocadas en dar conocer y posicionar negocios en el mercado digital.",
  // },
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
