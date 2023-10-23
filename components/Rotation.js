//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.5) {
          this.data.speedOfRotation += 0.05;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.5) {
          this.data.speedOfRotation -= 0.05;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});

//Plane rotation component
var cameraRig = document.querySelector("#camera-rig")
            var cameraRotation = cameraRig.getAttribute("rotation")
            var cameraPosition = cameraRig.getAttribute("position")
            var cameraMoveControl = cameraRig.getAttribute("movement-controls")

            console.log(cameraMoveControl.speed)
            cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.5})
            console.log(cameraMoveControl.speed)

            var cameraDirection = new THREE.Vector3();
            cameraRig.object3D.getWorldDirection(cameraDirection);

            if (e.code == "ArrowRight") {
                cameraRotation.y = 0.5
                cameraRig.setAttribute("rotation", { x: 1, y: cameraRotation.y, z: 5 })                
                cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 5})

            }

            if (e.code == "ArrowLeft") {
                cameraRotation.y += 0.5
                cameraRig.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 5 })             
                cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed - 0.5})

            }

            //Speed Up/Accelerate on Up Arrow Keyup
            if (e.code == "ArrowUp") {
                multiply += 0.5

                if (multiply <= 100 && cameraPosition.z > -500) {                  
                    cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
                    var accelerateCar = document.querySelector("#control-acce")
                    accelerateCar.setAttribute("material", "color", "green")
                    var carSpeed = document.querySelector("#speed")
                    carSpeed.setAttribute("text", { value: multiply });
                }

            }