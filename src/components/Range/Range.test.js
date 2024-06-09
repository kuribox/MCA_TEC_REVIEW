import { render, screen, fireEvent } from '@testing-library/react';
import Range from './index';


jest.mock('../RangePoint', () => ({ name, onChange }) => (
  <div data-testid={`point-${name}`} onClick={() => onChange(name, 50)}>
    Point {name}
  </div>
));

jest.mock('../RangeLabel', () => ({ name, text, onChange }) => (
  <div data-testid={`label-${name}`} onClick={() => onChange(5)}>
    Label {name}: {text}
  </div>
));

describe('Range Component', () => {
  test('renders Range component', () => {
    render(<Range />);
    const container = screen.getByTestId('range-container');
    expect(container).toBeInTheDocument();
  });

  test('renders Range component with correct initial values', () => {
    const min = 1;
    const max = 10;
    const values = [1, 5, 10];
    const suffix = '%';
    render(<Range min={min} max={max} values={values} suffix={suffix} />);

    const leftLabel = screen.getByTestId('label-left');
    const rightLabel = screen.getByTestId('label-right');
    expect(leftLabel).toHaveTextContent('Label left: 1');
    expect(rightLabel).toHaveTextContent('Label right: 10');
  });

  test('calls onChange with updated min value', () => {
    const handleChange = jest.fn();
    render(<Range onChange={handleChange} values={[1, 5, 10]} />);

    const leftLabel = screen.getByTestId('label-left');
    fireEvent.click(leftLabel);
    expect(handleChange).toHaveBeenCalledWith({ min: 5, max: 10 });
  });

  test('calls onChange with updated max value', () => {
    const handleChange = jest.fn();
    render(<Range onChange={handleChange} values={[1, 5, 10]} />);

    const rightLabel = screen.getByTestId('label-right');
    fireEvent.click(rightLabel);
    expect(handleChange).toHaveBeenCalledWith({ min: 1, max: 5 });
  });

  test('updates min value when point is clicked', () => {
    render(<Range values={[1, 5, 10]} />);

    const minPoint = screen.getByTestId('point-min');
    fireEvent.click(minPoint);

    const selectedBar = screen.getByTestId('selected-bar');
    expect(selectedBar).toHaveStyle({ left: '35px' });
  });

  test('updates max value when point is clicked', () => {
    render(<Range values={[1, 5, 10]} />);

    const maxPoint = screen.getByTestId('point-max');
    fireEvent.click(maxPoint);

    const selectedBar = screen.getByTestId('selected-bar');
    expect(selectedBar).toHaveStyle({ width: '20px' });
  });
});