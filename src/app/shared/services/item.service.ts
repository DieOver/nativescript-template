import { Injectable } from "@angular/core";
import { Item } from "../interfaces/item";

@Injectable({
  providedIn: "root"
})
export class ItemService {

  private items: Item[] = [
    {
      id: 1,
      img: 'data:image/jpeg;base64,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',
      name: 'Niketa William',
      location: 'Paris'
    },
    {
      id: 2,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louiss asrasr asrasr',
      location: 'London'
    },
    {
      id: 3,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 4,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 5,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 6,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 6,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 6,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 6,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 6,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 6,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 6,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
    {
      id: 6,
      img: 'https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg',
      name: 'Trisha Louis',
      location: 'London'
    },
  ];

  getItems(): Item[] {
    return this.items;
  }

  getItem(id: number): Item {
    return this.items.find(item => item.id === id);
  }
}
