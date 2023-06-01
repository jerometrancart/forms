import { Component } from 'react';
import styled from 'styled-components';
import '../myCss.css';


const Title = styled.h1`
    color: red;
    font-size: 80px;
`

const Button = styled.button`
    background: black;
    color: #FFF
    font-weight: bold`




class Form extends Component {

    render() {
        
        
        return(
            <div>
                <Title>Commentaire 1</Title>
                
                
                <Button>Valider</Button>
            </div>
        )
    }
}

export default Form;