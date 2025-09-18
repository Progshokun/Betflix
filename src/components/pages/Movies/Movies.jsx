import AcroolCarousel, { AcroolSlideImage } from '@acrool/react-carousel';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import useMovieQuery from '../../../hooks/useMovieQuery';
import ErrorMessage from '../../ui/ErrorMessage';

const Movies = () => {
  const {
    isLoading,
    hasError,
    responcePopular,
    responceBest,
    responceMovie,
    responceSeries,
    responceCartoon,
  } = useMovieQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const coruselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: serializeDataForCarousel(responcePopular?.data?.items),
    },
    {
      title: 'Топ 250 лучших фильмов',
      url: '/top250',
      data: serializeDataForCarousel(responceBest?.data?.items),
    },
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: serializeDataForCarousel(responceMovie?.data?.items),
    },
    {
      title: 'Фильмы',
      url: '/movies',
      data: serializeDataForCarousel(responceSeries?.data?.items),
    },
    {
      title: 'Мультфильмы',
      url: '/cartoons',
      data: serializeDataForCarousel(responceCartoon?.data?.items),
    },
  ];

  function serializeDataForCarousel(data) {
    return data?.map(item => (
      <RouterLink key={item.kinopoiskId} to={`movie/${item.kinopoiskId}`}>
        <img src={item.posterUrl} alt={item.nameRu} width={200} height={300} />
      </RouterLink>
    ));
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (!hasError) return <ErrorMessage />;

  return (
    <div>
      {coruselArr.map(item => (
        <div key={item.url}>
          <Link component={RouterLink} to={item.url}>
            <h2>{item.title}</h2>
          </Link>
          <Slider {...settings}>{item.data}</Slider>
        </div>
      ))}
    </div>
  );
};

export default Movies;
