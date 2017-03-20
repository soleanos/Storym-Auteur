import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let stories = [
      {id: 11, title: 'Harry Potter à Itechsup'},
      {id: 12, title: 'Les barres de chocolats avec petite pépites'},
      {id: 13, title: 'Poulet et céléri, comment mêler l inconciliable'},
      {id: 14, title: 'L histoire du dernier mahmmut, du kebab à clash of clan'},
      {id: 15, title: 'Clement, le retour du chevalier Mozilla'},
      {id: 16, title: 'Le sexe facile pour les aveugles'},
      {id: 17, title: 'La tour sombre'},
      {id: 18, title: 'Histoire de France'},
      {id: 19, title: 'Le grand Brudele II, la vie d un marabou conquérant'},
      {id: 20, title: 'Servino de la pointe du Share, histoire et révélations'}
    ];
    return {stories};
  }
}
