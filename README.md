# Stopwatch Flask Application

A responsive and aesthetic stopwatch web application built with Flask, featuring lap functionality.

## Features

- Start, pause, and reset functionality
- Lap recording with timestamps
- Responsive design for all device sizes
- Aesthetic UI with smooth animations
- Real-time display of minutes, seconds, and milliseconds

## Installation

1. Clone this repository
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the application:
   ```
   python app.py
   ```
4. Open your browser and navigate to `http://127.0.0.1:5001/`

## Project Structure

```
stopwatch_app/
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
├── static/
│   ├── css/
│   │   └── style.css       # Styling for the application
│   └── js/
│       └── script.js       # JavaScript for stopwatch functionality
└── templates/
    └── index.html          # Main HTML template
```

## Usage

- Click the **Start** button to begin the stopwatch
- Click the **Pause** button to pause the stopwatch
- Click the **Reset** button to reset the stopwatch to 00:00:00
- Click the **Lap** button to record a lap time (only available when the stopwatch is running)

## Technologies Used

- Flask (Python web framework)
- HTML5
- CSS3 (with responsive design)
- JavaScript (for stopwatch functionality)
- Font Awesome (for icons)
