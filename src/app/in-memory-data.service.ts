import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // let heroes = [
    //   {id: 11, title: 'Mr. Nice'},
    //   {id: 12, title: 'Narco'},
    //   {id: 13, title: 'Bombasto'},
    //   {id: 14, title: 'Celeritas'},
    //   {id: 15, title: 'Magneta'},
    //   {id: 16, title: 'RubberMan'},
    //   {id: 17, title: 'Dynama'},
    //   {id: 18, title: 'Dr IQ'},
    //   {id: 19, title: 'Magma'},
    //   {id: 20, title: 'Tornado'}
    // ];
    let stories = [
      {id: 11, title: 'Harry Potter à Itechsup'},
      {id: 12, title: 'Les barres de chocolats avec petite pépites'},
      {id: 13, title: 'Poulet et célérie, comment mêler l inconciliable'},
      {id: 14, title: 'L histoire du dernier mahmmut, du kebab à clash heroes'},
      {id: 15, title: 'Clement, le retour du chevalier Mozilla'},
      {id: 16, title: 'Le sexe facile pour les aveugles'},
      {id: 17, title: 'La tour sombre'},
      {id: 18, title: 'Histoire de France'},
      {id: 19, title: 'Le grand marabou Brudele II'},
      {id: 20, title: 'Servino de la pointe de Share, histoire et révélations'}
    ];
    return {stories};
  }
}
