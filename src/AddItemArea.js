import React from 'react';
import styled from 'styled-components/native';

const AddItemArea = styled.View`
    background-color: #7895B2
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    max-width: 350px
    margin-left: 20px;
    margin-right: 20px
`;

const AddItemInput = styled.TextInput`
    background-color: #F5EFE6;
    font-size: 15px;
    border-radius: 4px;
    height: 50px;
    padding: 10px;
`;

export default (props) => {

    const [item, setItem] = React.useState(null);

    function handleSubmit() {
        if(item.trim() !== '') {
            let lista = [...props.items];

            lista.push({
                id: Math.floor(Date.now() * Math.random() * 999999999).toString(36),
                tarefa: item.trim(),
                feito: false
            });

            //atualizar lista com nova tarefa cadastrada
            props.setItems(lista);

            //apagar input
            setItem('');
        }
    };

    return ( 
        <AddItemArea>
            <AddItemInput 
            placeholder="Cadastrar uma nova tarefa"
            placeholderTextColor= "grey"
            value={item}
            onChangeText={texto => setItem(texto)}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
            />
        </AddItemArea>
    );
};

