import styled, {css} from "styled-components"


export const Title = styled.h3`
display: flex;
align-items: center;
justify-content: center;
font-size:35px; 
`
export const Decor = styled.div`
background-color: red;
height:3px;
width:200px;
`

export const Decor1 = styled.div`
background-color: yellow;
height:3px;
width:200px;
`

export const Decor2 = styled.div`
background-color: green;
height:3px;
width:200px;
`


export const ListContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: start;
font-family: 'Arial', sans-serif;
padding: 20px;

`

export const PlanBox = styled.div`
display: flex;
  flex-direction: column;
`

export const Column = styled.div`
background-color: #fff;
border-radius: 8px;
padding: 10px;
margin: 10px;
width: 300px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Column1 = styled.div`
background-color: #fff;
border-radius: 8px;
padding: 10px;
margin: 10px;
width: 300px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);`

export const Column2 = styled.form`
background-color: #fff;
border-radius: 8px;
padding: 10px;
margin: 10px;
width: 300px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
margin: auto;
gap: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
width: 300px;
border-radius: 8px;
border: 1px dotted;
padding: 10px;

`

export const ListItem = styled.div`
  margin: 10px 0;
  padding: 8px;
  border-radius: 4px;
  ${({ $index }) => css`
    border: 2px solid ${changeBorder($index)};
    border-left: 6px solid ${changeBorder($index)};
  `}
`


const changeBorder = (index) => {
const colors = ["red", "green", "blue", "yellow"]
return colors[index % colors.length];

}

export const Text = styled.p`
${(props) => css `
color: ${props.color}`
}

`



// export const Button = styled.Button`
//   background-color: #f44336; 
//   color: white;
//   padding: 6px 12px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// `




