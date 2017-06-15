import { Recipe } from './recipes.model'

export class RecipeService {
    private recipes: Recipe[] = [new Recipe('Pav Bhaji','A fast food dish from Maharashtra','http://www.ndtv.com/cooks/images/pav.bhaji%20%281%29.jpg'),
    new Recipe('Dosa','A breakfast dish from South India','http://www.bhatkallys.com/wp-content/uploads/2016/12/22796096d9c63708fb5bdddd27fa10fe-620x330.jpg'),
    new Recipe('Pizza', 'A famous dish from Italy', 'http://www.athenaspizzaamherst.com/wp-content/uploads/2013/05/front-1-1008x500.jpg'),
    new Recipe('Ice Cream','Desert','https://images7.alphacoders.com/421/421534.jpg'),
    new Recipe('Chocolate Chip Cookies', 'Biscuits', 'https://images-gmi-pmc.edge-generalmills.com/b9272720-c6bf-4288-92f7-43542067af7c.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}