import { render, screen } from '@testing-library/react';
import Economy from './Economy';

// useNavigate hook mock
// https://stackoverflow.com/questions/66284286/react-jest-mock-usenavigate/66901155#66901155
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('renders title bar', () => {
  render(<Economy />);
  const title = screen.getByTestId('title');
  expect(title).toBeInTheDocument();
});

test('renders mobile news cards', () => {
  // app should render 80 news cards
  render(<Economy />);
  const newsCards = screen.getAllByTestId('newsCard');
  expect(newsCards).toHaveLength(80);
});

test('renders currency lists', () => {
  // mobile layout should render 2 currency lists
  render(<Economy />);
  const currencyLists = screen.getAllByTestId('currency-list');
  expect(currencyLists).toHaveLength(2);
});

test('renders carousel items', () => {
  // we want 20 slides in the carousel
  // but react-slick renders 2n+1 slides,
  // which means app should render 41 slides
  render(<Economy />);
  const carouselItems = screen.getAllByTestId('carousel-item');
  expect(carouselItems).toHaveLength(41);
});

test('renders carousel buttons', () => {
  // app should render 20 carousel buttons
  render(<Economy />);
  const carouselButtons = screen.getAllByTestId('carousel-button');
  expect(carouselButtons).toHaveLength(20);
});
