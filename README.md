# Color Gradient Sketch

This project creates a dynamic color gradient sketch using p5.js. It features a slider UI component that allows users to adjust the color intensity of the points on the canvas.

## Features

- **Dynamic Points**: Points move in random directions and wrap around the canvas edges.
- **Color Mapping**: The x-position of each point is mapped to a color value.
- **Slider Control**: A slider allows users to adjust the color intensity of the points.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/color-gradient-sketch.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd color-gradient-sketch
    ```
3. **Open `index.html` in your browser** to view the sketch.

## Usage

- **Mouse Interaction**: Click and drag the slider to adjust the color intensity.
- **Keyboard Interaction**: Use the left and right arrow keys to decrease or increase the slider value.

## Code Overview

### `Slider` Class

- **Constructor**: Initializes the slider's position and dimensions.
- **update()**: Updates the slider's value based on user interaction.
- **draw()**: Draws the slider on the canvas.

### `setup()` Function

- Initializes the canvas and positions it in the center of the window.
- Creates an array of points with random directions.
- Creates a new slider instance.

### `draw()` Function

- Continuously updates and renders the canvas.
- Updates the position of each point and wraps it around the canvas edges.
- Maps the x-position of each point to a color value.
- Draws each point with the mapped color and slider value.
- Updates and draws the slider.

## Dependencies

- **p5.js**: A JavaScript library that makes coding accessible for artists, designers, educators, and beginners.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by the creative coding community and the capabilities of p5.js.

## Contact

For any questions or suggestions, please open an issue
