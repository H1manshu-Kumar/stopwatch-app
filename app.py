# Import necessary modules from Flask
from flask import Flask, render_template

# Create a Flask web application instance
app = Flask(__name__)

# Define a route for the root URL ('/')
@app.route('/')
def index():
    """
    Renders the index.html template when the root URL is accessed.
    """
    return render_template('index.html')

# Run the application only if this script is executed directly
if __name__ == '__main__':    
    app.run(debug=True, port=5001)
