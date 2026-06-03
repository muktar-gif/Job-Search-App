# Job Search App

A React Native mobile app built with Expo that lets users search for jobs, browse listings by category and type, and view detailed job information — all powered by a live jobs API.

---

## Screenshots

| Home | Search | Job Details |
|---|---|---|
| <img src="https://github.com/muktar-gif/Job-Search-App/assets/84489366/226031f4-4b6a-4aa1-bb61-d7fb22bed8a7" alt="alt text" width="248" height="538.7"> | <img src="https://github.com/muktar-gif/Job-Search-App/assets/84489366/d12aaaf2-d8f1-4801-afe8-95e6a91e441b" alt="alt text" width="248" height="538.7"> | <img src="https://github.com/muktar-gif/Job-Search-App/assets/84489366/7036deba-cabd-45e1-941d-5207a2f71d9d" alt="alt text" width="248" height="538.7"> |
| Qualifications | Responsibilities |
| <img src="https://github.com/muktar-gif/Job-Search-App/assets/84489366/d9f8fe22-910a-4080-beab-5cc98536a52c" alt="alt text" width="248" height="538.7"> | <img src="https://github.com/muktar-gif/Job-Search-App/assets/84489366/312a5fdb-1600-4340-a0fd-3aa591fda95f" alt="alt text" width="248" height="538.7"> |

---

## Features

- **Job Search** — Search for jobs by title, keyword, or company
- **Browse by Category** — Filter listings by job type (full-time, part-time, contractor)
- **Popular & Nearby Jobs** — Curated sections on the home screen for quick browsing
- **Job Detail View** — View full job descriptions, qualifications, and responsibilities
- **Similar Jobs** — See related listings from the job detail screen
- **External Apply** — Tap to open the job's application page in a browser

---

## Tech Stack

| Technology | Version |
|---|---|
| React Native | 0.74.3 |
| Expo | ^51.0.18 |
| React | 18.2.0 |
| expo-router | ~3.5.17 |
| axios | ^1.4.0 |
| react-native-gesture-handler | ~2.16.1 |
| react-native-reanimated | ~3.10.1 |
| react-native-dotenv | ^3.4.9 |
| expo-font | ~12.0.7 |

---

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your iOS or Android device

---

## Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/muktar-gif/Job-Search-App.git
cd Job-Search-App
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root of the project and add your API key:

```
RAPIDAPI_KEY=your_api_key_here
```

The app uses the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) via RapidAPI. Sign up at [rapidapi.com](https://rapidapi.com) to get a free key.

**4. Start the development server**

```bash
npm start
```

Scan the QR code in the terminal with the Expo Go app to run on your device.

---

## Running on a Specific Platform

```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```
