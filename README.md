# Xfinity UI (Expo React Native scaffold)

This is a minimal Expo-based React Native scaffold created to get you started quickly.

## Prereqs (Windows)
- Node.js (16+ recommended)
- npm or yarn
- Android Studio (for running on Android device/emulator)

## Quick start (PowerShell)

Open PowerShell and run:

```powershell
cd D:\code\xfinity-UI
npm install
npx expo start
```

- Press "a" in the Metro terminal to open on an Android emulator/device.
- On macOS you can run `npx expo run:ios` (not available on Windows for local iOS runs).

## Build a production APK/AAB (recommended: EAS Build)

Install EAS CLI and follow Expo docs to configure EAS:

```powershell
npm install -g eas-cli
eas login
eas build --platform android
# For iOS you must run on macOS or use EAS cloud builds:
# eas build --platform ios
```

## What I created
- `package.json` – scripts and dependencies
- `App.js` – minimal app
- `app.json` – Expo config
- `.gitignore` – basic ignores
- `README.md` – run/build instructions

## Next steps
- If you have existing code to integrate, upload or point me to it and I will incorporate it.
- I can add navigation, screens, types (TypeScript), linting, and CI if you want.
