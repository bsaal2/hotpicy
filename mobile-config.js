App.info({
  name: 'HOTPICY',
  description: 'An app built to help searching the favourite restaurants nearby',
  version: '2.1'
});

App.accessRule('*');

App.icons({

  // Android
  'android_ldpi': 'launcher/mipmap-xxhdpi/ic_launcher.png',
  'android_mdpi': 'launcher/mipmap-mdpi/ic_launcher.png',
  'android_hdpi': 'launcher/mipmap-hdpi/ic_launcher.png',
  'android_xhdpi': 'launcher/mipmap-xhdpi/ic_launcher.png'
});

App.launchScreens({
  // Android
  'android_ldpi_portrait': 'splash/res-long-port-ldpi/default.png',
  'android_ldpi_landscape': 'splash/res-long-land-ldpi/default.png',
  'android_mdpi_portrait': 'splash/res-long-port-mdpi/default.png',
  'android_mdpi_landscape': 'splash/res-long-land-mdpi/default.png',
  'android_hdpi_portrait': 'splash/res-long-port-hdpi/default.png',
  'android_hdpi_landscape': 'splash/res-long-land-hdpi/default.png',
  'android_xhdpi_portrait': 'splash/res-long-port-xhdpi/default.png',
  'android_xhdpi_landscape': 'splash/res-long-land-xhdpi/default.png'
});

App.setPreference("SplashScreenDelay", 4000);