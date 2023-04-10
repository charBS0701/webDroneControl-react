import { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 25%;
`

const DirectionBtn = styled.img`

`

const DirectionControl = () => {
    return (
     <Fragment>
        <Container>
            <DirectionBtn src={process.env.PUBLIC_URL + '/uDirection.png'} alt="uDirection" />
            <div>
                <DirectionBtn src={process.env.PUBLIC_URL + '/lDirection.png'} alt="lDirection" />
                <DirectionBtn src={process.env.PUBLIC_URL + '/rDirection.png'} alt="rDirection" />
            </div>
            <img src={process.env.PUBLIC_URL + '/dDirection.png'} alt="dDirection" />
        </Container>
    </Fragment>   
    )
};

export default DirectionControl;