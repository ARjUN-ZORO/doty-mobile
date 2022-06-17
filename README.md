- Clone the repo
```
git clone https://github.com/ARjUN-ZORO/doty-mobile.git 
cd  doty-mobile
```
- install all the required node packages  and install react-native globally 
```
npm i
npm i -g react-native react-native-cli
```
---
- Download and install JDK if not already installed 
__- while installing JDK make sure you have enabled the "Set JAVA_HOME variable"option __
[JDK](https://www.openlogic.com/openjdk-downloads?field_java_parent_version_target_id=416&field_operating_system_target_id=All&field_architecture_target_id=All&field_java_package_target_id=396)(choose your OS and ARCHITECTURE)
---
- install Android Studio
[https://developer.android.com/studio](https://developer.android.com/studio)
- Open the project in the Android studio 
- Go to tools -> SDK Manager
- Click on Android SDK -> SDK Tools, check "Show Package Details"
- Check "32.0.0" in "Android SDK Build-Tools"
- Check "20.1.5948944" in NDK
- Check "Android SDK Command-line Tools (latest) 7.0" in "Android SDK Command-line Tools"
- Check Android SDK Platform Tools 
- Click Apply and wait for it to complete 
- Go to File -> Project Structure 
- Select "Project" in the sidebar and select the Project SDK to "Android Studio default JDK" then Apply

- Open the Start menu and type "path" and select "Edit System environment variables"
- Add the following variable to both user and system
NAME : `ANDROID_SDK_ROOT`
VALUE : `C:\Users\{USER}\AppData\Local\Android\Sdk`

- To create a virtual device in android studio follow the article below
[Create an android virtual device](https://developer.android.com/studio/run/managing-avds#createavd)
- Else to use a physical device plug-in the device and enable USB debugging in Developer options 

- Open a CMD terminal in the project root folder and run `npm start`
- Open an another CMD terminal and run `npm run android`
__Make sure that at least one device is connected__