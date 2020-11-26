import Carousel from './index';

const images = [
  'https://images.unsplash.com/photo-1595780255300-04ba96eedb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1553182452-23ef7d4d1db1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1588192805356-858f33ad318a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1567282726776-1efa11a30b53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1566687109065-a21dc267b727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
];

const carousel = new Carousel({
  imagesList: images,
  imageEl: 'carousel__root',
  nextButtonEl: 'carousel__next',
  prevButtonEl: 'carousel__prev',
});

carousel.mount();
