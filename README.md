# 🌍 Eco Vista - Weather Dashboard

A modern, responsive weather dashboard built with Next.js 15 and Tailwind CSS 4. Eco Vista provides comprehensive weather information including current conditions, temperature, wind data, and air quality metrics for locations worldwide.

## ✨ Features

- 🌡️ **Real-time Weather Data** - Current weather conditions with detailed descriptions
- 📊 **Temperature Information** - Actual temperature and "feels like" readings
- 💨 **Wind Metrics** - Wind speed and direction data
- 🌬️ **Air Quality Index (AQI)** - Comprehensive air pollution monitoring with pollutant breakdowns
- 📍 **Location Detection** - Automatic geolocation with manual location switching
- 🎨 **Modern UI/UX** - Clean, responsive design with gradient overlays and card-based layout
- 🚀 **Performance Optimized** - Built with Next.js 15 App Router and Turbopack

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with PostCSS
- **UI Components:** React 19.1.0
- **Build Tool:** Turbopack
- **Linting:** ESLint 9 with Next.js configuration

## 📋 Prerequisites

Before running this project, you'll need:

- Node.js 18+ installed
- API keys for:
  - [OpenWeatherMap API](https://openweathermap.org/api) (for weather and air quality data)
  - [BigDataCloud API](https://www.bigdatacloud.com/) (for reverse geocoding)

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/forhadreza43/eco-vista.git
   cd eco-vista
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   OPENWEATHER_API_KEY=your_openweather_api_key
   BIGDATA_API_KEY=your_bigdatacloud_api_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
eco-vista/
├── app/
│   ├── [location]/              # Dynamic location routes
│   │   ├── @aqi/               # Parallel route for AQI component
│   │   ├── @temperature/       # Parallel route for temperature
│   │   ├── @weather/          # Parallel route for weather
│   │   ├── @wind/             # Parallel route for wind data
│   │   └── layout.tsx         # Location-specific layout
│   ├── api/
│   │   └── location/          # Location API endpoints
│   ├── context/               # React context providers
│   └── globals.css           # Global styles with Tailwind
├── components/               # Reusable React components
├── lib/                     # Utility functions and API calls
├── public/assets/          # Static assets (icons, images)
└── utils/                  # Type definitions and utilities
```

## 🎯 Key Features Breakdown

### Weather Information
- **Current Weather:** Real-time weather conditions with icons
- **Temperature:** Current temperature and perceived temperature
- **Wind Data:** Speed (m/s) and direction (degrees)

### Air Quality Monitoring
- **AQI Rating:** Good, Fair, Moderate, Poor, Very Poor classifications
- **Pollutant Details:**
  - Carbon Monoxide (CO)
  - Nitric Oxide (NO)
  - Nitrogen Dioxide (NO2)
  - Ozone (O3)
  - Sulfur Dioxide (SO2)
  - PM2.5 particles

### Location Features
- **Auto-detection:** Uses browser geolocation API
- **Manual Selection:** Predefined locations (London, Kolkata, Dhaka, Singapore, New York, Toronto)
- **Location Switching:** Easy switching between saved locations

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🌐 API Integration

The application integrates with two main APIs:

### OpenWeatherMap API
- **Weather Data:** `/data/2.5/weather`
- **Air Quality:** `/data/2.5/air_pollution`

### BigDataCloud API
- **Reverse Geocoding:** `/data/reverse-geocode`

## 🎨 Styling & Design

- **Tailwind CSS 4:** Latest version with enhanced features
- **Custom Design System:** Consistent color palette and typography
- **Responsive Design:** Mobile-first approach with breakpoints
- **Dark Theme:** Professional dark UI with gradient overlays

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices (default)
- Large screens (`lg:`)
- Extra large screens (`2xl:`)

## 🚀 Performance Features

- **Server-Side Rendering (SSR)** with Next.js App Router
- **Data Caching:** 10-minute cache for weather API calls
- **Parallel Routes:** Efficient loading of multiple weather components
- **Suspense Boundaries:** Graceful loading states
- **Turbopack:** Fast development builds

## 🔐 Environment Variables

Required environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENWEATHER_API_KEY` | OpenWeatherMap API key | Yes |
| `BIGDATA_API_KEY` | BigDataCloud API key | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Forhad Reza**
- GitHub: [@forhadreza43](https://github.com/forhadreza43)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- [BigDataCloud](https://www.bigdatacloud.com/) for geocoding services
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
