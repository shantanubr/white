# React Native Boilerplate

Node version in use: `v18.17.0`

JAVA Version: `JDK 17`

Prerequisites: Have [Android Studio](https://developer.android.com/studio?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqqX1q55vUNvI_F7kdB6aRpzcZ0QW3cs2zoG2rZ0GIFdAeDGWA-hjAhoCr80QAvD_BwE&gclsrc=aw.ds) and [Xcode](https://developer.apple.com/xcode/) in your system.

## Modify Existing Shell Environment

```bash
source ~/.bash_profile
```

To manually set `$JAVA_HOME` env variable:

```bash
export "JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home";
```

Check it using this command:

```bash
echo $JAVA_HOME
```

## Install dependencies

```bash
yarn
```

### For Android

```bash
cd android && ./gradlew clean && cd ..
```

### For iOS

```bash
yarn fix-boost && cd ios && pod install
```

In case if anything fails during `pod install`:

Delete `Podfile.lock` file in the `ios` folder and run the following commands:

```bash
# rm -rf ~/.cocoapods/repos/trunk
rm -rf ~/Library/Caches/CocoaPods
rm -rf Pods
rm -rf ~/Library/Developer/Xcode/DerivedData/*
pod deintegrate
pod setup
pod install
```

## Start your application

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```
