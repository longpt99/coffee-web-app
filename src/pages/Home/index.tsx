import Header from '../../components/Header/Header';
import homeBackgroundImage from '../../assets/images/home-8-pattern.jpg';
import HomeLayout from '../../components/Layout/Home/HomeLayout';
import Carousel from '../../components/Carousel/Carousel';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import slideImage1 from '../../assets/images/h-8-slider-img-1.jpg';
import slideImage2 from '../../assets/images/h-8-slider-img-2.jpg';
import slideImage3 from '../../assets/images/h-8-slider-img-3.jpg';
import slideImage4 from '../../assets/images/h-8-slider-img-4.jpg';
import {
  footerBackground,
  itemShowcase1,
  itemShowcase2,
  itemShowcase3,
  itemShowcase4,
  itemShowcase5,
  itemShowcase6,
  itemShowcaseMain,
  moment1,
  moment2,
  moment3,
  moment4,
} from '../../assets/images';
import Category from '../../components/Home/Category/Category';
import Moment from '../../components/Home/Moment/Moment';
import Product from '../../components/Home/Product/Product';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  const sliderContents = [
    {
      title: 'Importance of coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img.png',
      image: slideImage1,
    },
    {
      title: 'Special coffee beans',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img-2.png',
      image: slideImage2,
    },
    {
      title: 'Brewed to perfection',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img-4.png',
      image: slideImage3,
    },
    {
      title: 'The home of coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img-2.png',
      image: slideImage4,
    },
  ];
  const categoryContents = [
    {
      title: 'Croissant',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: itemShowcase1,
    },
    {
      title: 'French toast',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: itemShowcase2,
    },
    {
      title: 'Pancakes',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: itemShowcase3,
    },
    {
      title: 'Turkish coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: itemShowcase4,
    },
    {
      title: 'Coffee to go',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: itemShowcase5,
    },
    {
      title: 'Morning coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: itemShowcase6,
    },
  ];
  const productContents = [
    {
      image: '/assets/images/h-1-list-icon-img.jpg',
      title: 'Coffee latte',
      description: 'Fresh brewed coffee and steamed milk',
      price: '2.95',
      isNew: true,
    },
    {
      image: '/assets/images/h-1-list-icon-img-2.jpg',
      title: 'Coffee mocha',
      description: 'Espresso With Milk, and Whipped Cream',
      price: '2.95',
      isNew: false,
    },
    {
      image: '/assets/images/h-1-list-icon-img-3.jpg',
      title: 'White chocolate mocha',
      description: 'Espresso, White Chocolate, Milk, Ice and Cream',
      price: '2.95',
      isNew: false,
    },
    {
      image: '/assets/images/h-1-list-icon-img-4.jpg',
      title: 'Coffee americano',
      description: 'Espresso Shots and Light Layer of Crema',
      price: '2.95',
      isNew: false,
    },
    {
      image: '/assets/images/h-1-list-icon-img-5.jpg',
      title: 'Cappuccino',
      description: 'Espresso, and Smoothed Layer of Foam',
      price: '2.95',
      isNew: false,
    },
    {
      image: '/assets/images/h-1-list-icon-img-6.jpg',
      title: 'Vanilla latte',
      description: 'Espresso Milk With Flavor,and Cream',
      price: '2.95',
      isNew: false,
    },
    {
      image: '/assets/images/h-1-list-icon-img-7.jpg',
      title: 'Coffee latte',
      description: 'Fresh brewed coffee and steamed milk',
      price: '2.95',
      isNew: false,
    },
    {
      image: '/assets/images/h-1-list-icon-img-8.jpg',
      title: 'Coffee mocha',
      description: 'Espresso With Milk, and Whipped Cream',
      price: '2.95',
      isNew: false,
    },
    {
      image: '/assets/images/h-1-list-icon-img-9.jpg',
      title: 'White chocolate mocha',
      description: 'Espresso, White Chocolate, Milk, Ice and Cream',
      price: '2.95',
      isNew: false,
    },
    {
      image: '/assets/images/h-1-list-icon-img-10.jpg',
      title: 'Coffee americano',
      description: 'Espresso Shots and Light Layer of Crema',
      price: '2.95',
      isNew: true,
    },
    {
      image: '/assets/images/h-1-list-icon-img-11.jpg',
      title: 'Cappuccino',
      description: 'Espresso, and Smoothed Layer of Foam',
      price: '2.95',
      isNew: false,
    },
    {
      image: '/assets/images/h-1-list-icon-img-12.jpg',
      title: 'Vanilla latte',
      description: 'Espresso Milk With Flavor,and Cream',
      price: '2.95',
      isNew: true,
    },
  ];

  return (
    <HomeLayout>
      <Carousel>
        {sliderContents.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </Carousel>
      <Category image={itemShowcaseMain} data={categoryContents} />
      <Moment
        img={{ img1: moment1, img2: moment2, img3: moment3, img4: moment4 }}
      />
      <Product contents={productContents} />
      <Footer bgImage={footerBackground} />
    </HomeLayout>
  );
}

export default HomePage;
