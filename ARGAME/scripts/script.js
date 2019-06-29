const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');
const Scene = require('Scene');
var Textures = require('Textures');
var Materials = require('Materials');
var Patches = require('Patches');
const Reactive = require('Reactive');


    
    
    const object = Scene.root.find("cube");


  var lastPosX = object.transform.x.pinLastValue();
   Patches.setScalarValue("cubePositionX", lastPosX);


Diagnostics.log(lastPosX);

