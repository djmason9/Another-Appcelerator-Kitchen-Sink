## Another Appcelerator Kitchen Sink 
This project gives an overview of native components available 
in Titanium. The components are grouped into multiple groups.

<img align="center" width="376" src="/screen-animation.gif"/>

### Fetaures
- [x] Controls (Switch, Slider, Tabbed Bar, Text Field, Alerts, Dialogs, ...)
- [x] Views (Scroll View, List View, Image View, Blur View, Web View, ...)
- [x] Maps (Maps, Geolocation, ...)


### Running the KitchenSink App

#### Via Appcelerator Studio

1. Import it via *File > Import... > Git > Git Repository as New Project* with *URI*:

		https://github.com/djmason9/Another-Appcelerator-Kitchen-Sink

3. Select a Simulator or Device to build to via *Run > Run As*.

#### Via CLI

1. Clone the repository:

		git clone https://github.com/djmason9/Another-Appcelerator-Kitchen-Sink

2. To run it with `appc run` first import it to the platform:

		appc new --import --no-services

3. Build to Simulator or Device:

		[appc run | ti build] -p ios [-T device]

### Contribution

Code contributions are greatly appreciated, please submit a new [pull request](https://github.com/djmason9/Another-Appcelerator-Kitchen-Sink/pull/new/master)!