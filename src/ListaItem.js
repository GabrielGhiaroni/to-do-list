import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
    padding: 10px;
    flex-direction: row;
    border-radius: 4px;
    background-color: #2b3a4e;
    margin-bottom: 10px
    align-items: center
    margin-left: 10px;
    margin-right: 10px;
`;

const ItemText = styled.Text`
    font-family: Helvetica;
    font-size: 20px;
    flex: 1;
    margin-left: 12px;
    text-decoration: ${props => props.done ? 'line-through' : ''};
    text-decoration-color: white
    color: ${props => props.done ? 'gray' : '#ececf6'}
`;

// const ItemCheck = styled.Image`
//     width: 20px;
//     height: 20px;
//     border-radius: 10px;
//     border: 5px solid #CCC;
// `;

export default (props) => {

    return (
        <Item onPress={props.onPress}>
            <>
            {/* <ItemCheck></ItemCheck> */}
            <Image 
                source={props.data.feito ? require('./img/done.png') : require('./img/notdone.png')}
            />
            <ItemText  done={props.data.feito}>{props.data.tarefa}</ItemText>
            </>
        </Item>
    );
};  