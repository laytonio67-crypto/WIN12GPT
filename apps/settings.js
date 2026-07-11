// =====================================
// LaytonOS Settings
// =====================================


function settingsApp(){


    let old =
    document.getElementById("settings");


    if(old){

        old.style.display="block";

        old.style.zIndex=999;

        return;

    }





    let content = `


    <h2>
    LaytonOS Settings
    </h2>



    <hr>


    <h3>
    Appearance
    </h3>



    <button onclick="changeWallpaper('blue')">
    Blue Theme
    </button>



    <button onclick="changeWallpaper('dark')">
    Dark Theme
    </button>



    <br><br>


    <h3>
    System Information
    </h3>



    <p>
    Operating System:
    LaytonOS 1.0
    </p>


    <p>
    Storage:
    Virtual C: Drive
    </p>


    <p>
    Platform:
    Browser Based OS
    </p>


    `;




    createWindow(

        "settings",

        "⚙️ Settings",

        content

    );


}








function changeWallpaper(theme){



    let desktop =
    document.getElementById("desktop");



    if(theme==="blue"){


        desktop.style.background =

        "linear-gradient(135deg,#0078d4,#4b2c91)";


    }





    if(theme==="dark"){


        desktop.style.background =

        "linear-gradient(135deg,#111,#333)";


    }


}
