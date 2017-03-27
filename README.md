## Tree App
**WCU Tree App**
- Set up
- Testing
- Building
- JSON Stucture
- Pictures
- Issues/Pain Points
- Additional Issues

### Set Up
After downloading, run npm install through the command prompt
Then you should be good to go

### Testing
To view in the browser run ionic serve, and you will get a live local serve to devlop on. 
To test the app on an Android Device you need to enable develop mode, and USB debugging on the Android Device. 

### Building 
**Android Devices**

To run the app on an Android device (either in production, or testing) you need to run _ionic platform add android_

If you have not created a keystore you will need to do that. 

To create a keystore

_link to keytool_ -genkey -v -keystore _keystoreName_.keystore -alias _keystoreAlias_ -keyalg RSA -keysize 2048 -validity 10000

You will be asked to create a password for your keystore.

**Do not forget this password. You will need it to build the app. **

**Do not loose this keystore. Store it somewhere safe on your computer. This is how the Play Store recognises your app. Without this key, you cannot update your app. If you loose this, there is no way to retrieve this.**

_link to jasrsigner_ -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore _customKeystoreName_  _link to unsigned apk_  _appname_

_zipalign_ -v 4 _Link-to-unsigned.apk_ _Signed-APK-Name.apk_

### JSON Stucture
Example: { "Tree_ID":1, "UTM_zone":"17S", "Easting":301313.12, "Northing":3909461.17, "Species_scientific":"Quercus alba", "Species_common":"White oak", "Spp_code":"QUAL", "Lat": 35.308635, "Long": -83.185412}

- Tree_ID: The numeric id for the tree
- UTM_zone:The numbers represents what zone east to west, and the number represents north or south
- Easting, Northing:The location that is used by ArcGIS to plot the points in ArcGIS
- Species_scientific: The name used by scietific community to identify a tree species
- Species_common: The common name to identify the tree
- Spp_code: The scientific short code to identify the tree 
- Lat: The latitude of the location
- Long: The longitude of the locations

### Picutres

**Play Store**
The icon needs to be a 512px X 512px PNG
The feature image on the Google Play Store needs to be 1024px w x 500px h PNG
These images needs to be exact due to Play Store Guidelines

**In App**
Image for Welcome screen
Image for Home Screen
Image for generic tree, if no image is avalible
The best format for these images is PNG
Full width that should have a css-width of 100% should be no less than 640px to keep the same resoultion. 

### Issues/Pain Points
When creating and icon for the the app create it as a 512px X 512px PNG and place it in the resources folder with the name icon.png. Run _ionic resources --icon_ and it will generate the needed icons for both OS's. 
When updating the app on the Play Store make sure you are updating the config.xml to a higher version number, or Google will not accept the APK. 
The Jarsigner.exe and the keytool.exe are in the JDK. 

Made Using http://prose.io
