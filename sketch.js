// Class representing a slider UI component
class Slider {
    // Constructor to initialize the slider's position and dimensions
    constructor(x, y, width) {
        this.x = x; // x-coordinate of the slider
        this.y = y; // y-coordinate of the slider
        this.width = width; // width of the slider
        this.value = 0; // initial value of the slider
    }

    // Method to update the slider's value based on user interaction
    update() {
        // Check if the mouse is pressed and within the slider's bounds
        if (mouseIsPressed && mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y - 10 && mouseY < this.y + 10) {
            // Map the mouseX position to a value between 0 and 255
            this.value = map(mouseX, this.x, this.x + this.width, 0, 255);
        }

        // Check if the left arrow key is pressed
        if (keyIsDown(LEFT_ARROW)) {
            // Decrease the slider's value, ensuring it stays within 0 to 255
            this.value = constrain(this.value - 5, 0, 255);
        }
        // Check if the right arrow key is pressed
        else if (keyIsDown(RIGHT_ARROW)) {
            // Increase the slider's value, ensuring it stays within 0 to 255
            this.value = constrain(this.value + 5, 0, 255);
        }
    }

    // Method to draw the slider on the canvas
    draw() {
        // Draw the slider's background
        noStroke();
        fill(255, 182, 193); // Light pink color
        rect(this.x - 5, this.y - 15, this.width + 10, 30, 10); // Rounded rectangle

        // Draw the slider's line
        stroke(0); // Black color
        strokeWeight(3); // Line thickness
        line(this.x + 20, this.y, this.x + this.width - 20, this.y); // Line from one end to the other

        // Draw the slider's handle
        fill(255 / 2, 100, slider.value); // Color based on the slider's value
        ellipse(map(this.value, 0, 255, this.x + 20, this.x + this.width - 20), this.y, 10, 10); // Handle position and size
    }
}

let slider; // Variable to hold the slider instance
const TOTAL = 100; // Total number of points
let points = []; // Array to hold the points
let barValue = 0; // Variable to hold the bar value (not used in this code)

// Setup function to initialize the canvas and other elements
function setup() {
    // Create a canvas and position it in the center of the window
    let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    background(255, 182, 193); // Set the background color to light pink

    // Initialize the points with random directions
    for (var i = 0; i < TOTAL; i++) {
        points.push({
            pos: createVector(width / 2, height / 2), // Start position at the center
            dir: random(TWO_PI) // Random direction
        });
    }

    // Create a new slider instance
    slider = new Slider(width - 150, height - 50, 130);
}

// Draw function to update and render the canvas continuously
function draw() {
    // Loop through each point and update its position
    for (let i = 0; i < points.length; i++) {
        let p = points[i];

        // Update the position based on the direction
        p.pos.x += cos(p.dir) * 10;
        p.pos.y += sin(p.dir) * 10;

        // Wrap the position around the canvas edges
        if (p.pos.x > width) p.pos.x = 0;
        if (p.pos.x < 0) p.pos.x = width;
        if (p.pos.y > height) p.pos.y = 0;
        if (p.pos.y < 0) p.pos.y = height;

        // Map the x-position to a color value
        let col = map(p.pos.x, 0, width, 0, 255);

        // Draw the point with the mapped color and slider value
        stroke(col, 100, slider.value);
        strokeWeight(70); // Point size
        point(p.pos.x, p.pos.y); // Draw the point
    }

    // Update and draw the slider
    slider.update();
    slider.draw();
}