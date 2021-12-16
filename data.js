var APP_DATA = {
  "scenes": [
    {
      "id": "0-com1-building",
      "name": "COM1 Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.678541270418199,
        "pitch": -0.1468399094543429,
        "fov": 1.3419674740723089
      },
      "linkHotspots": [
        {
          "yaw": 0.15611498043175587,
          "pitch": 0.011938852032939096,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1452089909286851,
          "pitch": -0.6373733491640206,
          "title": "COM1 Building<br>",
          "text": "Welcome to COM1 Building!<br>"
        }
      ]
    },
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.2938564556929215,
        "pitch": 0.02986574429579747,
        "fov": 1.3419674740723089
      },
      "linkHotspots": [
        {
          "yaw": 1.285364777744748,
          "pitch": 0.12790291314306756,
          "rotation": 0,
          "target": "0-com1-building"
        },
        {
          "yaw": 2.2652491193339594,
          "pitch": 0.05785510931148785,
          "rotation": 0,
          "target": "2-foyer-at-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2659860480091183,
          "pitch": -0.3714300493764533,
          "title": "COM1 Lobby<br>",
          "text": "Find the history of NUS Computing here!<br>"
        }
      ]
    },
    {
      "id": "2-foyer-at-level-2",
      "name": "Foyer at Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.033838016110092184,
        "pitch": 0.012444060123250722,
        "fov": 1.3419674740723089
      },
      "linkHotspots": [
        {
          "yaw": -2.707398526635629,
          "pitch": 0.019186868853140027,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.13365090944512303,
          "pitch": 0.0006586430489523565,
          "title": "NUS SoC Foyer<br>",
          "text": "Here is the place for you to study!<br>"
        }
      ]
    }
  ],
  "name": "School of Computing Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
