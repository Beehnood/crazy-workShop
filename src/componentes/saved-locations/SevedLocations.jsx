import {useState} from 'react';
import {locations} from "../../layout/locations.js";

export default function SavedLocations() {
    const [savedLocations, setSavedLocations] = useState(locations);

    // fetch user saved location
    // axios -> data -> setSavedLocations(data)

    return (
        <div className="grid grid-cols-2 gap-4">
            {savedLocations?.map((location) => (
                <div key={location?.id} className="w-full border border-gray-200 rounded-lg p-2">
                    <h1>{location?.name}</h1>
                </div>
            ))}
        </div>
    )
}