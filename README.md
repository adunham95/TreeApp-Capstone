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

### Building 
To Build an apk for android Devices
If you have not created a keystore you will need to do that. 
_link to jasrsigner_ -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore _customKeystore_ _link to unsigned apk_ _appname_

### JSON Stucture
Example: { "Tree_ID":1, "UTM_zone":"17S", "Easting":301313.12, "Northing":3909461.17, "Species_scientific":"Quercus alba", "Species_common":"White oak", "Spp_code":"QUAL", "Lat": 35.308635, "Long": -83.185412}

Tree_ID: The numeric id for the tree
UTM_zone:The numbers represents what zone east to west, and the number represents north or south
Easting, Northing:The location that is used by ArcGIS to plot the points in ArcGIS
Species_scientific: The name used by scietific community to identify a tree species
Species_common: The common name to identify the tree
Spp_code: The scientific short code to identify the tree 
Lat: The latitude of the location
Long: The longitude of the locations

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
When creating and icon for the the app create it as a 512px X 512px PNG and place it in the resources folder with the name icon.png. Run > ionic resources --icon > and it will generate the needed icons for both OS's. 


### Additional Issues 

Made Using http://prose.io
