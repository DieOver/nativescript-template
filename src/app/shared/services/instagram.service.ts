import { Injectable } from "@angular/core";
import { ObservableArray } from "@nativescript/core";
import { Instagram } from "~/app/shared/interfaces/instagram";

@Injectable({
  providedIn: "root"
})
export class InstagramService {
  private items: Instagram[] = [
    {
      id: 1,
      profile:
        "https://www.artmajeur.com/medias/standard/f/r/frednath/artwork/11725298_woman-out-of-line-1.jpg",
      photos: [
        {
          image:
            "https://www.uninassau.edu.br/sites/mauriciodenassau.edu.br/files/fields/imagemLateral/noticias/2020/04/mulher_em_campo.jpg"
        },
        {
          image:
            "https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg"
        }
      ],
      name: "astroloucamente",
      musica: "João Gustavo e Murilo",
      likedBy: "leonice_ribeiro2",
      description: "mais do que merecido",
      countComments: 318
    },
    {
      id: 2,
      profile:
        "https://www.artmajeur.com/medias/standard/f/r/frednath/artwork/11725298_woman-out-of-line-1.jpg",
      photos: [
        {
          image:
            "https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg"
        },
        {
          image:
            "https://www.uninassau.edu.br/sites/mauriciodenassau.edu.br/files/fields/imagemLateral/noticias/2020/04/mulher_em_campo.jpg"
        }
      ],
      name: "astroloucamente",
      musica: "João Gustavo e Murilo",
      likedBy: "leonice_ribeiro2",
      description: "mais do que merecido",
      countComments: 318
    },
    {
      id: 3,
      profile:
        "https://www.artmajeur.com/medias/standard/f/r/frednath/artwork/11725298_woman-out-of-line-1.jpg",
      photos: [
        {
          image:
            "https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg"
        },
        {
          image:
            "https://www.uninassau.edu.br/sites/mauriciodenassau.edu.br/files/fields/imagemLateral/noticias/2020/04/mulher_em_campo.jpg"
        }
      ],
      name: "astroloucamente",
      musica: "João Gustavo e Murilo",
      likedBy: "leonice_ribeiro2",
      description: "mais do que merecido",
      countComments: 318
    }
  ];

  getItems(): Promise<ObservableArray<Instagram>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new ObservableArray(this.items));
      }, 700);
    });
  }

  getItem(id: number): Instagram {
    return this.items.find(item => item.id === id);
  }
}
