import {
  AutoAwesome,
  AutoStories,
  FamilyRestroom,
  Favorite,
  Fort,
  LiveTv,
  LocalMovies,
  MoodBad,
  PublicOff,
  Reorder,
  Star,
} from '@mui/icons-material';

export const iconComponents = {
  AutoStories,
  AutoAwesome,
  FamilyRestroom,
  Favorite,
  Fort,
  LiveTv,
  LocalMovies,
  MoodBad,
  PublicOff,
  Reorder,
  Star,
};

export const TOP_LISTS = [
  {
    title: 'Топ 100 популярных фильмов',
    icon: 'AutoAwesome',
    url: '/popular',
  },
  {
    title: 'Топ 250 лучших фильмов',
    icon: 'Star',
    url: '/top250',
  },
  {
    title: 'Комиксы',
    icon: 'AutoStories',
    url: '/comics',
  },
  {
    title: 'Семейные',
    icon: 'FamilyRestroom',
    url: '/family',
  },
  {
    title: 'Романтика',
    icon: 'Favorite',
    url: '/romance',
  },
  {
    title: 'Зомби',
    icon: 'MoodBad',
    url: '/zombie',
  },
  {
    title: 'Катастрофы',
    icon: 'PublicOff',
    url: '/catastrophe',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/tvseries',
  },
];

export const MOVIE_LISTS = [
  {
    title: 'Фильмы',
    icon: 'LocalMovies',
    url: '/movies',
  },
  {
    title: 'Сериалы',
    icon: 'Reorder',
    url: '/series',
  },
  {
    title: 'Мультфильмы',
    icon: 'Fort',
    url: '/cartoons',
  },
];
