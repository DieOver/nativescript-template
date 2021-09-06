interface Photos {
  image: string;
}

export interface Instagram {
  id: number;
  profile: string;
  photos: Photos[];
  name: string;
  musica: string;
  likedBy: string;
  description: string;
  countComments: number;
}
