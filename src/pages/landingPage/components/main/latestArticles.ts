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
`;

export const TitleLatestArticles = styled.h2`
    font-size: 33px;
    font-weight: 100;
    margin: 0 40px;
    color: ${PrimaryTextColor}
`;
