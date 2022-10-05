import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/ListaItem';
import AddItemArea from './src/AddItemArea';


const Page = styled.SafeAreaView`
  flex: 1;
  background-color: #18243c
`;

const Titulo = styled.Text`
  margin-top: 30px
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-bottom: 20px
`;

const DailyTasks = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #3D7EFF
`;

const Subtitulo = styled.Text`
  font-size: 15px;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 30px
`;

const Listagem = styled.FlatList`
  flex: 1;
`;

export default () => {

  const [items, setItems] = React.useState(lista);

  function toggleDone(index) {
    let novaListaAoMarcar = [...items];

    novaListaAoMarcar[index].feito = !novaListaAoMarcar[index].feito;
    setItems(novaListaAoMarcar);
  };

  return(
    <Page>
      <Titulo>Bem-vindo(a) ao <DailyTasks>DailyTasks</DailyTasks> </Titulo>
      <Subtitulo>Organize seu dia-a-dia ☀️  </Subtitulo>
      <AddItemArea items={items} setItems={setItems} />
      <Listagem 
        data={items}
        renderItem={({item, index}) => <ListaItem onPress={() => toggleDone(index)} data={item}/>}
        keyExtractor={(item) => item.id}
      />
    </Page>
  );
};

  