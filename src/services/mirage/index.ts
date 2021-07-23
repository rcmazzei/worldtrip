import { belongsTo, createServer, Model } from 'miragejs';

// type Continent = {
//   name: string;
//   image_url: string;
// }

// type City = {
//   name: string;
//   continent_id: string;
//   image_url: string;
// }

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model,

      city: Model.extend({
        continent: belongsTo(),
      }),
    },
    seeds(server) {
      server.db.loadData({
        continents: [
          {
            name: 'América do Norte',
            image_url: '/north-america.jpg',
            countries: 3,
            cities: 200,
            languages: 20,
            description: 'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia)'
          },
          {
            name: 'América do Sul',
            image_url: '/south-america.jpg',
            countries: 23,
            cities: 500,
            languages: 15,
            description: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial'
          },
          {
            name: 'Ásia',
            image_url: '/asia.jpg',
            countries: 40,
            cities: 1000,
            languages: 30,
            description: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial'
          },
          {
            name: 'África',
            image_url: '/africa.jpg',
            countries: 20,
            cities: 400,
            languages: 30,
            description: 'A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes'
          },
          {
            name: 'Europa',
            image_url: '/europe.jpg',
            countries: 50,
            cities: 27,
            languages: 60,
            description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'
          },
          {
            name: 'Oceania',
            image_url: '/oceania.jpg',
            countries: 2,
            cities: 100,
            languages: 10,
            description: 'Oceania é uma região geográfica que inclui a Australásia, Melanésia, Micronésia e Polinésia. Abrangendo os hemisférios oriental e ocidental, a Oceania tem uma área de 8.525.989 quilômetros quadrados e uma população de mais de 41 milhões'
          },
        ],
        cities: [
          {
            name: 'Ottawa',
            country_name: 'Canadá',
            continent_id: 1,
            image_url: 'https://ci-prod.imgix.net/upload/galeriadeimagens/00204157.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Canada.png',
          },
          {
            name: 'Havana',
            country_name: 'Cuba',
            continent_id: 1,
            image_url: 'https://assistentedeviagem.com.br/blog/wp-content/uploads/2021/04/havana-1024x682.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Cuba.png',
          },
          {
            name: 'Washington',
            country_name: 'Estados Unidos',
            continent_id: 1,
            image_url: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2020/05/5dab40e18dc596d9755780ae3227cfa3750d5010-418x235.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Etats-Unis.png',
          },
          {
            name: 'Cidade do México',
            country_name: 'México',
            continent_id: 1,
            image_url: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/05/cidade-do-mexico-capa-820x430.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Mexique.png',
          },
          {
            name: 'Cidade do Panamá',
            country_name: 'Panamá',
            continent_id: 1,
            image_url: 'https://www.carpemundi.com.br/wp-content/uploads/2015/09/cidade-panama-skyline.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Panama.png',
          },
          {
            name: 'Buenos Aires',
            country_name: 'Argentina',
            continent_id: 2,
            image_url: 'https://www.daninoce.com.br/wp-content/uploads/2018/01/o-que-voce-precisa-saber-antes-de-ir-a-buenos-aires-dani-noce-imagem-destaque-960x625.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Argentine.png',
          },
          {
            name: 'Rio de Janeiro',
            country_name: 'Brasil',
            continent_id: 2,
            image_url: 'https://super.abril.com.br/wp-content/uploads/2017/12/rio-de-janeiro.png',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Bresil.png',
          },
          {
            name: 'Santiago',
            country_name: 'Chile',
            continent_id: 2,
            image_url: 'https://a5k5v6q9.stackpathcdn.com/wp-content/uploads/2019/10/feriados-em-santiago-do-chile-em-2020-1170x680.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Chili.png',
          },
          {
            name: 'Bogotá',
            country_name: 'Colômbia',
            continent_id: 2,
            image_url: 'http://yazigitravel.com.br/wp-content/uploads/2020/05/Viagem-para-Bogot%C3%A1_Col%C3%B4mbia.mil_.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Colombie.png',
          },
          {
            name: 'Quito',
            country_name: 'Equador',
            continent_id: 2,
            image_url: 'https://i0.wp.com/melevaviajar.com.br/wp-content/uploads/2017/05/Quito-a-cidade-da-metade-do-mundo.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Equateur.png',
          },
          {
            name: 'Pequim',
            country_name: 'China',
            continent_id: 3,
            image_url: 'https://chinavistos.com.br/wp-content/uploads/2017/12/cidade-de-Pequim-1.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Chine.png',
          },
          {
            name: 'Pionguiangue',
            country_name: 'Coréia do Norte',
            continent_id: 3,
            image_url: 'https://i.pinimg.com/originals/60/d9/d4/60d9d45d4fb3b58b4ab2141f9ce52ce7.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Coree_du_Nord.png',
          },
          {
            name: 'Seul',
            country_name: 'Coréia do Sul',
            continent_id: 3,
            image_url: 'https://www.constancezahn.com/wp-content/uploads/2018/08/07-lua-de-mel-seul.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Coree_du_Sud.png',
          },
          {
            name: 'Tóquio',
            country_name: 'Japão',
            continent_id: 3,
            image_url: 'https://www.maxmilhas.com.br/blog/wp-content/uploads/2019/07/T%C3%B3quio-Jap%C3%A3o-1024x683.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Japon.png',
          },
          {
            name: 'Ancara',
            country_name: 'Turquia',
            continent_id: 3,
            image_url: 'https://terrasantaviagens.com.br/wp-content/uploads/2018/06/2-48.png',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Turquie.png',
          },
          {
            name: 'Pretória',
            country_name: 'Afríca do Sul',
            continent_id: 4,
            image_url: 'https://content.r9cdn.net/rimg/dimg/c2/18/9a370f03-city-32072-17314d6e9cf.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Afrique_du_Sud.png',
          },
          {
            name: 'Luanda',
            country_name: 'Angola',
            continent_id: 4,
            image_url: 'https://i.pinimg.com/originals/4f/86/b4/4f86b45100c25b8ebe401a20b44f03d0.png',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Angola.png',
          },
          {
            name: 'Iaundê',
            country_name: 'Camarões',
            continent_id: 4,
            image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Cameroon-Yaounde01.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Cameroun.png',
          },
          {
            name: 'Iamussucro',
            country_name: 'Costa do Marfim',
            continent_id: 4,
            image_url: 'https://i.pinimg.com/originals/6d/48/18/6d4818948a5cf68a95f6c24c6bcdb8ae.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Cote_d_Ivoire.png',
          },
          {
            name: 'Acra',
            country_name: 'Gana',
            continent_id: 4,
            image_url: 'https://1.bp.blogspot.com/-ibdpbyLN_bk/UVB362mrWOI/AAAAAAAAxoE/J25x5ZSPD0s/w1200-h630-p-k-no-nu/Accra-Gana.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Ghana.png',
          },
          {
            name: 'Berlim',
            country_name: 'Alemanha',
            continent_id: 5,
            image_url: 'https://www.vounajanela.com/wp-content/uploads/2018/05/o-que-fazer-em-Berlim-1050x599.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Allemagne.png',
          },
          {
            name: 'Madrid',
            country_name: 'Espanha',
            continent_id: 5,
            image_url: 'https://i2.wp.com/www.eurodicas.com.br/wp-content/uploads/2019/06/capital-da-espanha.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Espagne.png',
          },
          {
            name: 'Paris',
            country_name: 'França',
            continent_id: 5,
            image_url: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Europe/France.png',
          },
          {
            name: 'Roma',
            country_name: 'Itália',
            continent_id: 5,
            image_url: 'https://conteudo.imguol.com.br/c/entretenimento/9b/2019/12/16/coliseu-em-roma-na-italia-1576505063192_v2_615x300.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Italie.png',
          },
          {
            name: 'Londres',
            country_name: 'Reino Unido',
            continent_id: 5,
            image_url: 'https://www.euandopelomundo.com/wp-content/uploads/2015/03/londres_big_ben.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png',
          },
          {
            name: 'Camberra',
            country_name: 'Austrália',
            continent_id: 6,
            image_url: 'https://passaportefeliz.com.br/wp-content/uploads/2020/01/australia-camberra-cidade.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Oceanie/Australie.png',
          },
          {
            name: 'Suva',
            country_name: 'Fiji',
            continent_id: 6,
            image_url: 'https://digital.ihg.com/is/image/ihg/holiday-inn-suva-5955681252-4x3',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Oceanie/Fidji.png',
          },
          {
            name: 'Wellington',
            country_name: 'Nova Zelândia',
            continent_id: 6,
            image_url: 'https://aic.azureedge.net/pgl-release/Images/ArticleImages/16/16937.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Oceanie/Nouvelle-Zelande.png',
          },
          {
            name: 'Porto Moresby',
            country_name: 'Papua Nova Guiné',
            continent_id: 6,
            image_url: 'https://www.travelsafe-abroad.com/wp-content/uploads/Port-Moresby.png',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Oceanie/Papouasie-Nouvelle-Guinee.png',
          },
          {
            name: 'Honiara',
            country_name: 'Salomão',
            continent_id: 6,
            image_url: 'https://static01.nyt.com/images/2019/09/16/world/16taiwan/merlin_153900630_4b389913-e138-488d-9dac-509f01e40269-jumbo.jpg',
            country_flag_image_url: 'https://www.sport-histoire.fr/Sources/Drapeaux/Oceanie/Salomon.png',
          },
        ]
      })
    },
    routes() {
      this.namespace = 'api';

      this.get('/continents', (schema, request) => {
        return schema.all('continent');
      });

      this.get('/continents/:id', (schema, request) => {
        const { id } = request.params;
        return schema.where('continent', { id });
      });

      this.get('/cities', (schema, request) => {
        const { continent_id } = request.queryParams;
        return schema.where('city', { continent_id } as any);
      });

      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}