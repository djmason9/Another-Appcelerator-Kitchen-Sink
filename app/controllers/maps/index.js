// Make sure to add this to your tiapp.xml file

/* 
    //IOS 
    <plist>
        <dict>
            <key>NSLocationAlwaysUsageDescription</key>
            <string>We need your location so we can cross check where you are so we can find you!</string>
        </dict>
     </plist>
     
    //Android  development details https://developers.google.com/maps/
    <manifest>
    <uses-library android:name="com.google.android.maps"/>
                <uses-sdk android:minSdkVersion="18"/>
                <application android:debuggable="true">
                    <meta-data
                        android:name="com.google.android.maps.v2.API_KEY" 
                        android:value="[YOUR KEY MAP HERE]"/>
    </manifest>                 
*/
     
(function(){
    
    if (Ti.Network.online && OS_IOS) {

        // Ti.Geolocation.purpose = "Receive User Location";
        Titanium.Geolocation.getCurrentPosition(function(e) {

            if (!e.success || e.error) {
                alert('Could not find the device location');
                return;
            }
            var longitude = e.coords.longitude;
            var latitude = e.coords.latitude;

            // alert("latitude: " + latitude + " longitude: " + longitude);

            var Map = require('ti.map');


            var mountainView = Map.createAnnotation({
                latitude : 37.390749,
                longitude : -122.081651, 
                title : "Appcelerator Headquarters",
                subtitle : 'Mountain View, CA',
                pincolor : Map.ANNOTATION_RED,
                myid : 1 // Custom property to uniquely identify this annotation.
            });

            var mapview = Map.createView({
                mapType : Map.NORMAL_TYPE,
                region : {
                    latitude : latitude,
                    longitude : longitude,
                    latitudeDelta : 0.01,
                    longitudeDelta : 0.01
                },
                animate : true,
                regionFit : true,
                userLocation : true,
                annotations : [mountainView]
            });

            var circle = Map.createCircle({
                center : {
                    latitude : latitude,
                    longitude : longitude
                },
                radius : 1000, //1km
                fillColor : "#20FF0000"
            });
            mapview.addCircle(circle);

            $.map.add(mapview);
            // Handle click events on any annotations on this map.
            mapview.addEventListener('click', function(evt) {
                Ti.API.info("Clicked " + evt.clicksource + " on " + evt.latitude + "," + evt.longitude);
            });
    
        });

    } else {
        var mapview = Titanium.Map.createView({
            mapType: Titanium.Map.STANDARD_TYPE,
            region: {latitude:37.389569, longitude:-122.050212,
                    latitudeDelta:0.1, longitudeDelta:0.1},
            animate:true,
            regionFit:true,
            userLocation:false
        });
        
        $.map.add(mapview);
    } 
    
})();