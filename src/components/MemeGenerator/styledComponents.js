import styled from 'styled-components/macro'

export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
    display: flex;
    flex-direction: column,
    width: 100%;
    max-width: 550px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-right: 24px;
    padding-left: 24px;
   
`
export const Heading = styled.h1`
    color: #35469c;
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
    @media screen and (min-width : 768px){
        font-size: 36px,
        text-align: left
    }
`
export const FormandMemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    
`
export const MemeGeneratorForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CustomLable = styled.lable`
    color:  #7e858e;
    font=family: 'Open Sans';
    font-wight: 500;
    font-size: 10px;
    line-height: 1.4;
    margin-bottom: 0px;

`
export const CustomInput = styled.input`
    color: #5a7184;
    baground-color: #ffffff;
    font-family: 'Open Sans';
    height: 40px;
    border: 1px solid #d7dfe9;
    border-radies: 5px;
    outline: none;
    

`
export const CustomSelect = styled.select`
    color: #1e293b;
    background-color: #ffffff;
    font-family: 'Open Sans';
    height: 40px;
    border: 1px solid #d7dfe9;
    border-radies: 5px;
    outline: none;
    
`
export const CustomOption = styled.option`
    font-size: 16px;`
export const GenerateButton = styled.button`
    color: #ffffff;
    baground-color: #0b69ff;
    border-radius: 6px;
    min-width: 25px;
    max-width: 15px;
    cursor: pointer:
    outline: none;
    
    margin-top: 15px;
`
export const MemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    height: 300px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 50px;`
export const TextContent = styled.p`
    color: #ffffff;
    font-size: ${props => props.activeFontSizeId};
    font-weight: 600;
    font-family: 'Open Sans';`
