# WeatherWave

WeatherWave is a weather dashboard application built using React.js and integrates with the OpenWeatherMap API. It allows users to view current weather and a 5-day forecast for a given city, manage favorite cities, and switch between Celsius and Fahrenheit units.

## Getting Started

### How to Obtain an API Key from OpenWeatherMap

To use OpenWeatherMap's services, you need to obtain an API key. Follow these steps to get your API key:

1. **Create an Account on OpenWeatherMap:**
   - Go to [OpenWeatherMap](https://openweathermap.org/).
   - Click on the "Sign Up" button in the top-right corner.
   - Fill in the required information to create your account.

2. **Navigate to the "My API Keys" Section:**
   - Once logged in, click on your profile icon in the top-right corner.
   - Select "My API Keys" from the dropdown menu.

3. **Generate a New API Key:**
   - In the "My API Keys" section, click on the "Create" button to generate a new API key.
   - Enter a name for your API key (e.g., "Weather App Key") and click "Generate".
   - Your new API key will appear in the list. Copy this key for use in your application.

**Note:** It may take around 1-2 hours for the API key to become active.



To get a local copy of the project up and running, follow these steps.

**Make a .env file in root directory of the project and then paste the copied API key in VITE_API_KEY**<br>
For example:<br> 
.env file<br>
```bash
VITE_API_KEY=your_api_key_here
```

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your development environment.

### Clone the Repository

```bash
git clone https://github.com/sujaltangde/WeatherWave.git
```

### Navigate to root directory and install dependencies 
```bash
cd WeatherWave
npm install
```

### Start the JSON Server: 
```bash
npx json-server --watch db.json --port 3001
```

### Start the development server in new terminal: 
```bash
npm run dev
```



