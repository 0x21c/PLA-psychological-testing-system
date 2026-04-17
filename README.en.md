# 2026 Soldier Occupational Basic Adaptability Simulation Test System

A web-based soldier occupational basic adaptability test system with multi-language support (Chinese, English, Traditional Chinese) and intelligent adaptive testing mechanism.

## Features

- 🎯 **Intelligent Adaptive Testing**: Normally only 80 questions, extends to 400 questions if anomalies detected
- 🌐 **Multi-language Support**: Chinese, English, and Traditional Chinese
- ⏱️ **Timer Function**: 40-minute countdown timer
- 📊 **Nine-Scale Scoring System**: MMPI-style professional psychological assessment
  - Lie Scale (L)
  - Infrequency Scale (F)
  - Correction Scale (K)
  - Depression (D)
  - Anxiety (Pt)
  - Paranoia (Pa)
  - Hypochondriasis (Hs)
  - Schizophrenia (Sc)
  - Psychopathic Deviate (Pd)
- 🔄 **Auto Navigation**: Automatically jumps to next question after selection
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎉 **Share Functionality**: Generate QR code to share test results

## Technology Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Pure front-end implementation, no backend server required

## Quick Start

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/yourusername/soldier-adaptability-test.git

# Enter project directory
cd soldier-adaptability-test

# Start with any HTTP server
# Option 1: Python
python -m http.server 8080

# Option 2: Node.js
npx http-server -p 8080

# Option 3: PHP
php -S localhost:8080
```

Then visit `http://localhost:8080/home.html` in your browser

### Project Structure

```
├── home.html          # Home page entry
├── index.html         # Main test page
├── app.js             # Core logic (question bank, scoring algorithm, multi-language)
├── style.css          # Stylesheet
├── README.md          # Project documentation (Chinese)
├── README.en.md       # Project documentation (English)
├── LICENSE            # MIT License
└── .gitignore         # Git ignore configuration
```

## Usage Instructions

1. Open home page `home.html`
2. Select language (中文/English/繁體)
3. Click "Start Test" button to enter test page
4. Read test instructions and click "Start Test"
5. Answer "Yes" or "No" based on your actual situation
6. View assessment report after completing the test
7. Share results via QR code using the share button

## Test Result Classification

- **Category 1 (Pass)**: All indicators within normal range, psychological quality meets requirements
- **Category 2 (Suspicious)**: Some indicators are elevated, further observation recommended
- **Category 3 (Fail)**: Multiple indicators abnormal, does not meet requirements

## License

MIT License

## Screenshots

### Home Page
![Home Page](https://raw.githubusercontent.com/yourusername/soldier-adaptability-test/main/screenshots/home.png)

### Test Page (Chinese)
![Test Page Chinese](https://raw.githubusercontent.com/yourusername/soldier-adaptability-test/main/screenshots/test-zh.png)

### Test Page (English)
![Test Page English](https://raw.githubusercontent.com/yourusername/soldier-adaptability-test/main/screenshots/test-en.png)

### Assessment Result
![Assessment Result](https://raw.githubusercontent.com/yourusername/soldier-adaptability-test/main/screenshots/result.png)

### Share Modal (with QR Code)
![Share Function](https://raw.githubusercontent.com/yourusername/soldier-adaptability-test/main/screenshots/share.png)

#### Feature Summary

| Feature | Description |
|---------|-------------|
| 🎯 Adaptive Testing | Dynamically adjusts question count based on responses |
| 🌐 Multi-language | Chinese/English/Traditional Chinese support |
| ⏱️ Timer | 40-minute countdown |
| 📊 Professional Scoring | 9-scale comprehensive assessment |
| 📱 Responsive | Works on all devices |
| 🎉 Share | QR code result sharing |