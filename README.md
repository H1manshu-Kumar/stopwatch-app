# Stopwatch Flask Application

A responsive and aesthetic stopwatch web application built with Flask, featuring lap functionality.

## Stopwatch project demo video

<video src="demo.webm" controls title="Stopwatch Application Demo" width="100%"></video>

## Features

- Start, pause, and reset functionality
- Lap recording with timestamps
- Responsive design for all device sizes
- Aesthetic UI with smooth animations
- Real-time display of minutes, seconds, and milliseconds
- Custom port configuration (runs on port 5001)

## Installation

1. Clone this repository
   ```
   git clone https://github.com/YOUR-USERNAME/stopwatch-app.git
   cd stopwatch-app
   ```

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
├── .gitignore              # Git ignore file
├── demo.webm               # Demo video of the application
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

## Development

This application was developed as part of a DevOps training project. The stopwatch runs on port 5001 instead of the default Flask port 5000.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
