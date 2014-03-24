Hackengarten Messenger
==========================

This is a Simple Notification Application built during the [AeroGear's Hackergarten](https://github.com/sebastienblanc/hackergarten) in 4 hours (including the NodeJS backend ) !

## Authors

* [Yacine Rezgui](https://twitter.com/yrezgui)
* [Laurent Dollé](https://twitter.com/LowDoll)
* [Sébastien Blanc](https://twitter.com/sebi2706)

## Used technologies

### Client Side


* [Ionic](http://ionicframework.com/)
* [Cordova](http://cordova.apache.org)
* [AeroGear Cordova Push Plugin](http://aerogear.org/docs/guides/aerogear-cordova/)


### Server Side
* [AeroGear UnifiedPush Server](http://aerogear.org/docs/specs/aerogear-server-push/)
* [NodeJS](http://nodejs.org/)
* These 2 components has been deployed on [OpenShift](https://www.openshift.com/) using their respective cartdridges

## Installation

### Server Side

Set up an UnifiedPush Server instance, more info :

* https://github.com/aerogear/aerogear-unifiedpush-server
* [Deploy it in 2 clicks with OpenShift](https://www.openshift.com/quickstarts/aerogear-push-0x)

Deploy NodeJS Application :

* The backend application just consist of the ``` server/index.js ``` , deploy it where you want, for instance OpenShift also comes with a NodeJS Cartdridge (be sure to uncomment the specific settings in the file for OpenShift).

* Don't forget to point to your UnifiedPush Instance URL and to set the Application ID and the Master Secret



### Client side

Clone the repo : 

``` git clone https://github.com/sebastienblanc/hackergarten-messenger ```

Add platform and plugins : 

```

cd hackergarten-messenger
cordova platform add android
cordova plugin add https://github.com/aerogear/aerogear-pushplugin-cordova.git

```

Change the settings related to the UnifiedPush Server (https://github.com/sebastienblanc/hackergarten-messenger/blob/master/www/js/services.js): 

```

 var pushConfig = {
      senderID: "senderID",
      pushServerURL: "https://hackergartenups-sblanc.rhcloud.com/",
      variantID: "variantID",
      variantSecret: "variantSecret"
  };

 ```
 
Also be sure to point to your NodeJS backend (https://github.com/sebastienblanc/hackergarten-messenger/blob/master/www/js/services.js). 

```

return $http({
      method: 'POST',
      url: 'http://hackernode-sblanc.rhcloud.com/messages',
      data: {
        message: msg
      }
    });

```

Deploy the app on the device : 

``` cordova run android ```


## TODOs

* Add local persistence using AeroGear's DataManager
* Encrypt the stored messages
* Create backends using other technologies : JEE7 / Grails / Rails / Vert.x




