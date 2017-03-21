import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let story = [
      {id: 11, title: 'Harry Potter à Itechsup',chapters : ["api/chapter/1","api/chapter/2"]},
      {id: 12, title: 'Les barres de chocolats avec petite pépites',chapters : ["api/chapter/1"]},
      {id: 13, title: 'Poulet et céléri, comment mêler l inconciliable',chapters : ["api/chapter/1","api/chapter/2"]},
      {id: 14, title: 'L histoire du dernier mahmmut, du kebab à clash of clan'},
      {id: 15, title: 'Clement, le retour du chevalier Mozilla'},
      {id: 16, title: 'Le sexe facile pour les aveugles'},
      {id: 17, title: 'La tour sombre'},
      {id: 18, title: 'Histoire de France'},
      {id: 19, title: 'Le grand Brudele II, la vie d un marabou conquérant'},
      {id: 20, title: 'Servino de la pointe du Share, histoire et révélations'}
    ];
    let chapter = [
      {id: 1, text: '  1 qsqqqqqqqqqqqqqqqqqqqddddddddddddd'},
      {id: 2, text: ' 2 aaaaaaaaaaaaaaaaaaaaaaaazzzzzzzzzzzz'},
      {id: 3, text: '  3 rrrrrrrrrrrrrrrrrrreeeeeeeeeeee'},
      {id: 4, text: ' 4 qsqqqqqqqSDFSDFSDFDSFSDFSDFSDqqqqqqqqqqqqddddddddddddd'},
      {id: 5, text: '5 aaaaaaSSSSSSSSSDDDDDDDDDDDDDDDDaaaaaaaaaaaaaaaaaazzzzzzzzzzzz'},
      {id: 6, text: '6 rrrrSSSSSSSSrrrrrrrrrrrrrrreeeeeeeeeeee'}
    ];
    return {story,chapter};
  }
}
