// =================================
// LaytonOS Virtual Storage
// =================================


const defaultDrive = {

    "C:": {

        "Users": {

            "Layton": {

                "Desktop": {},

                "Documents": {},

                "Downloads": {}

            }

        },

        "System": {

            "Version.txt":
            "LaytonOS v1"

        }

    }

};





function loadDrive(){


    let drive =
    localStorage.getItem("laytonDrive");


    if(drive){

        return JSON.parse(drive);

    }


    localStorage.setItem(
        "laytonDrive",
        JSON.stringify(defaultDrive)
    );


    return defaultDrive;


}





function saveDrive(drive){


    localStorage.setItem(

        "laytonDrive",

        JSON.stringify(drive)

    );


}





let fileSystem = loadDrive();
