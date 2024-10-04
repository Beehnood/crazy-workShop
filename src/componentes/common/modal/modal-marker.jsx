import {locations} from '../../../layout/locations.js';

const ModalMarker = ({showModal, setShowModal, selectedLocationId}) => {

    let filteredLocations = [];
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].id === selectedLocationId) {
            filteredLocations = [...filteredLocations, locations[i]];
        }
    }

    const saveLocationHandler = (locationId) => {
        alert(`location added. ${locationId}`);
    }

    return (
        <>
            {showModal ? (
                <>
                    <div style={{zIndex: 400}}
                         className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">{filteredLocations[0].name}</h3>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    {filteredLocations[0].address}
                                </div>
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => saveLocationHandler(filteredLocations[0].id)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default ModalMarker;