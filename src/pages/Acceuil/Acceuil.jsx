import React from "react";
import Map from "../../componentes/map/Map";
import {MapLocation} from "../../componentes/map/MapLocation";
import SavedLocations from "../../componentes/saved-locations/SevedLocations.jsx";

export default function Acceuil() {
    return (
        <div>
            <div className="grid place-items-center mx-6 my-6 gap-2">
                <h3 className="font-bold text-2xl">Bienvenue</h3>
                <p className=" mx-8 text-center">
                Mystery Hunt est une application interactive qui fournit à ses utilisateurs les coordonnées GPS (latitude et longitude) des emplacements de trésors cachés dans la ville de Rennes. Les utilisateurs peuvent explorer la ville, résoudre des énigmes et suivre les indices pour découvrir ces trésors. C'est une manière ludique de découvrir Rennes tout en ajoutant un élément de mystère et d'aventure à l'expérience.
                </p>

                {/* <Map /> */}
                <MapLocation/>

               

                {/* <SavedLocations/> */}

            </div>
        </div>
    );
}
