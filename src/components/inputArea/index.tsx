
import * as C from './styles';
import { useState } from 'react';
import { typeItem } from '../../types/typesItem';
import { categories } from '../../data/categories';
import { newDataAdjusted } from '../../helpers/dateFIlter';


type Props = {
    onAdd: (item: typeItem) => void;
}


export const InputArea = ({ onAdd }: Props) => {
    const [ dateField, setDateField ]  = useState('');
    const [ categoryField, setCategoryField ] = useState('');
    const [ titleField, setTitleField ] = useState('');
    const [ valueField, setValueField ] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
        let errors: string[] = [];

        if(isNaN(new Date(dateField).getTime())) {
            errors.push('Data Inválida!');
        }

        if(!categoryKeys.includes(categoryField)) {
            errors.push('Categoria Inválida!');
        }

        if(titleField === '') {
            errors.push('Titulo vazio!');
        }

        if(valueField <= 0 ) {
            errors.push('Valor Inválido');
        }  

        if(errors.length > 0 ){
            alert(errors.join("\n"));
        }else{
            onAdd({
                date: newDataAdjusted(dateField),
                category: categoryField,
                title: titleField,
                value: valueField
            });
            clearFields();
        }
    }

    const clearFields = () => {
        setDateField('');
        setValueField(0);
        setTitleField('');
        setCategoryField('');
    }

    return(
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input 
                    type='date' 
                    value={dateField} 
                    onChange={e=> setDateField(e.target.value)}
                />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select
                    value={categoryField}
                    onChange={e=> setCategoryField(e.target.value)}
                >
                    <>
                        <option></option>
                        {categoryKeys.map((key, index) => (
                            <option 
                                key={index} 
                                value={key}
                            >{categories[key].title}</option>
                        ))}
                    </>
                </C.Select>
            </C.InputLabel>
            
            <C.InputLabel>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input 
                    type='text'
                    value={titleField}
                    onChange={e=> setTitleField(e.target.value)}
                />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input 
                    type='number'
                    value={valueField}
                    onChange={e=> setValueField(parseFloat(e.target.value))}
                />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
            </C.InputLabel>


        </C.Container>
    )
}