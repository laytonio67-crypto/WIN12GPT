// =====================================
// LaytonOS Virtual Storage System
// =====================================


// Default virtual hard drive

const defaultStorage = {

    "C:": {

        "Users": {

            "Layton": {

                "Desktop": {},

                "Documents": {},

                "Downloads": {}

            }

        },


        "System": {

            "version.txt":
            "LaytonOS Version 1.0"

        }

    }

};








// Load storage


function loadStorage(){


    let saved =
    localStorage.getItem("LaytonOSStorage");



    if(saved){


        return JSON.parse(saved);


    }



    localStorage.setItem(

        "LaytonOSStorage",

        JSON.stringify(defaultStorage)

    );


    return defaultStorage;


}







// Save storage


function saveStorage(){


    localStorage.setItem(

        "LaytonOSStorage",

        JSON.stringify(fileSystem)

    );


}






// Main filesystem object


let fileSystem = loadStorage();
