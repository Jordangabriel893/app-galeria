import { Injectable } from '@angular/core';

@Injectable()
export class AlbunsService {
  albunsData = [
    {
      name: 'Recentes',
      image: 'https://midia.gruposinos.com.br/_midias/jpg/2021/02/12/adobestock_amizade-19462032.jpeg',
      length: 2356,
    },
    {
      name: 'Amigos',
      image: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2014/07/formacao_a-importancia-dos-lacos-de-amizade-em-nossa-vidas.jpg',
      length: 200,
    },
    {
      name: 'Viagens',
      image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/07/asa-aviao-capa2019-06-820x430.jpg',
      length: 1695,
    },
    {
      name: 'Família',
      image: 'https://www.inteligenciadevida.com.br/wp-content/uploads/2021/05/Site-1.png',
      length: 1326,
    },
    {
      name: 'Aventura',
      image: 'https://www.agenciatsuru.com.br/blog/wp-content/uploads/2016/07/marketing-digital-para-turismo-de-aventura-e-ecoturismo.jpg',
      length: 2000,
    },
    {
      name: 'Momentos',
      image: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1024h1024/2022/08/FEA/68864_shutterstock-2019910613.jpg',
      length: 132,
    },

  ]
  constructor() { }

  getAlbuns() {
    return this.albunsData
  }

}
