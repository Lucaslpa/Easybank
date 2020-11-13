import styled from 'styled-components';
const PrimaryTextColor = 'hsl(233, 26%, 24%)';


export const LatestArticles = styled.div`
display: flex;
-webkit-box-align: center;
    align-items: center;
    padding: 30px;
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    @media(min-width: 900px) { 
         align-items: initial;
         padding: 100px;
    }
`;

export const TitleLatestArticles = styled.h2`
    font-size: 33px;
    margin: 0 40px;
    color: ${PrimaryTextColor}
`;


export const ArticlesContainer = styled.div`
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;

    @media(min-width: 900px) { 
        flex-direction: initial;
    }
`;
