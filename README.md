# 🤖 NeuraChat – AI Mobile Chat Application
![Flutter](https://img.shields.io/badge/Flutter-02569B?logo=flutter&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![AI](https://img.shields.io/badge/AI-Ollama-purple)

NeuraChat is a modern AI-powered mobile chat application built using Flutter, with a Node.js backend and local LLM integration (Ollama).  
The app provides an interactive and visually engaging chat experience with a custom-designed UI and real-time AI responses.

---

## ✨ Features

- 💬 AI-powered chat assistant  
- 🎨 Modern UI with dark gradient theme  
- ⚡ Quick prompt suggestions  
- ⏳ Typing animation for realistic interaction  
- 🧼 Clear chat functionality  
- 🤖 Custom bot avatar & branding  
- 📱 Mobile-first design (Flutter)  
- 💰 Runs with local AI (no API cost)

---

## 🛠️ Tech Stack

- **Frontend:** Flutter  
- **Backend:** Node.js (Express)  
- **AI Model:** Ollama (Local LLM – LLaMA)  
- **Communication:** REST API (HTTP)

---

## 📸 Screenshots

<p align="center">
  <img src="assets/screenshots/home.png" width="250">
  <img src="assets/screenshots/chat.png" width="250">
</p>

---

## 🚀 How to Run the Project

### 1️⃣ Backend

```bash
cd backend
npm install
node server.js
```
### 2️⃣ Flutter App

```bash
cd flutter_app
flutter pub get
flutter run
```

## 🎥 Demo

<p align="center">
  <img src="assets/screenshots/demo.gif" width="300">
</p>

## 🧠 System Architecture

The application follows a client-server architecture:

- Flutter mobile app sends user messages
- Node.js backend handles API requests
- Backend communicates with local LLM (Ollama)
- AI response is returned to the app in real-time

## ⚙️ Configuration

- Default backend URL (emulator):
  http://10.0.2.2:3000/chat

- For physical devices, replace with your local IP:
  http://YOUR_IP:3000/chat

## 📂 Project Structure

neurachat/
├── backend/        # Node.js server
├── flutter_app/    # Flutter mobile application
├── assets/         # Screenshots & images

## 🚧 Challenges & Learning

- Integrated Flutter with a Node.js backend
- Handled local AI model communication using Ollama
- Designed a modern and responsive UI
- Managed API communication and error handling

