import styled from 'styled-components';
const DarkBlue = 'hsl(233, 26%, 24%)';


export const Container = styled.div`
background-color: ${DarkBlue};
padding: 50px; 
height: 700px;
@media(min-width: 900px) { 
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0; 
    height: 400px;
}
`;


export const LogoAndSocialMedias = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70px;
    justify-content: space-between;
    @media(min-width: 900px) { 
        height: 80px;
        width: 25%;
}
`;

export const SocialMedias = styled.div`
    display: flex; 
    width: 70%;
    justify-content: space-evenly;
    @media(min-width: 900px) { 
        width: 60%;
}
img { 
     width: 20px; 
     height: 20px; 
     fill: blue; 
}
`;

export const Infos = styled.div`
    height: 170px;
    margin: 15px 0;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    @media(min-width: 900px) { 
        height: 130px;
        display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 30px;
    flex-direction: initial;
}
`;

export const RequestAndRights = styled.div`
display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: space-evenly;
    height: 200px;
    @media(min-width: 900px) { 
        padding: 10px;
    margin-left: 20%;
   
}

    h6 {
        font-family: initial;
    }
`;
