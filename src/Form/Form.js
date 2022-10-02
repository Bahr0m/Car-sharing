import { useState } from 'react'
import styles from './Form.module.css'


const initialState = {
    name: '',
    surname: '',
    age: 0,
    location: '',
}

const Form = () => {
    const [state, setState] = useState(initialState);
    const { name, surname, age, location } = state;
    const [objects, setObjects] = useState(JSON.parse(localStorage.getItem('test-values')));

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newObj = {
            id: Date.now(),
            name,
            surname,
            age: +age,
            location
        }
        
        if (localStorage.getItem('test-values')) {
            let localStorageValue = JSON.parse(localStorage.getItem('test-values'));

            localStorageValue.push(newObj);

            localStorage.setItem('test-values', JSON.stringify(localStorageValue));
            setObjects(localStorageValue)
            return;
        } else {

            localStorage.setItem('test-values', JSON.stringify([newObj]));
            setObjects([newObj])
            return;
        }

    }


    return (
        <>
            <form className={styles.container} onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' name="name" value={name} onChange={handleChange} />
                <input type="text" placeholder='Surname' name="surname" value={surname} onChange={handleChange} />
                <input type="number" placeholder='Age' name="age" value={age} onChange={handleChange} />
                <input type="text" placeholder='Location' name="location" value={location} onChange={handleChange} />
                <button type='submit' disabled={!name || !surname || !age}>Submit</button>
            </form>
            <button onClick={() => setState(initialState)}>Reset</button>
            {objects &&
                <div className={styles["item-container"]}>
                    {objects.map((item,idx) =>
                        <div className={styles.item} key={item.id}>
                            <div className={styles.idx}>{idx + 1}</div>
                            <div>{item.name}</div>
                            <div>{item.surname}</div>
                            <div>{item.age}</div>
                            <div>{item.location}</div>
                        </div>
                    )}
                </div>
            }
        </>
    )
}

export default Form;