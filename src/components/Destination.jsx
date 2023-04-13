import React, { Fragment} from 'react';

const Destination = ({ destination, setDestination }) => {
    return(
        <>
            <h3 style={{textAlign:"left", border:"solid"}}>Destination</h3>
            <form>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
                <button>입력</button>
            </form>
        </>
    );
}

export default Destination;