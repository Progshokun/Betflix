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
    value: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'Топ 250 лучших фильмов',
    icon: 'Star',
    url: '/top250',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Комиксы',
    icon: 'AutoStories',
    url: '/comics',
    value: 'COMICS_THEME',
  },
  {
    title: 'Семейные',
    icon: 'FamilyRestroom',
    url: '/family',
    value: 'FAMILY',
  },
  {
    title: 'Романтика',
    icon: 'Favorite',
    url: '/romance',
    value: 'LOVE_THEME',
  },
  {
    title: 'Зомби',
    icon: 'MoodBad',
    url: '/zombie',
    value: 'ZOMBIE_THEME',
  },
  {
    title: 'Катастрофы',
    icon: 'PublicOff',
    url: '/catastrophe',
    value: 'CATASTROPHE_THEME',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/tvseries',
    value: 'TOP_250_TV_SHOWS',
  },
];

export const MOVIE_LISTS = [
  {
    title: 'Фильмы',
    icon: 'LocalMovies',
    url: '/movies',
    value: 'FILM',
  },
  {
    title: 'Сериалы',
    icon: 'Reorder',
    url: '/series',
    value: 'TV_SERIES',
  },
  {
    title: 'Мультфильмы',
    icon: 'Fort',
    url: '/cartoons',
    value: 'FILM',
  },
];
