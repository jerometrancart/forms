import { Component } from 'react';
import Headlight from './Headlight';
import '../myCss.css';
import styles from '../myCss.module.css';



class Form extends Component {

    render() {
        
        
        return(
            <div>
                <h1 className={styles.green}>Commentaire 1</h1>
                <Headlight />
                
                <button>Valider</button>
            </div>
        )
    }
}

export default Form;