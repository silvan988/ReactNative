import { StyleSheet, View, FlatList } from 'react-native';

import { useState } from 'react';
import ItemTarefa from './components/itemTarefa';

import DigitaTarefa from './components/DigitaTarefa';
import Toast from 'react-native-toast-message';


export default function App() {

    // Estado para armazenar a lista de tarefas:
    const [listaTarefas, setListaTarefas] = useState([]);

    // Função que usa o setter do estado listaTarefas para inserir
    // o texto da tarefa, recebido por parâmetro, na lista.
    // Esta função será passada para o componente DigitaTarefa via
    // props 'onAdicionaTarefa' para que o texto digitado lá neste
    // componente seja adicionado na lista de tarefas que está aqui
    // em App.js:

    function adicionaTarefa(textoTarefa) {
        setListaTarefas(listaAtual => [
            ...listaAtual,
            { text: textoTarefa, id: Math.random().toString() }
        ]);
    }

    function apagaTarefa(id) {
        const tarefa = listaTarefas.find(t => t.id === id);
        setListaTarefas((listaAtual) => {
            return listaAtual.filter((tarefa) => tarefa.id !== id);
        });

        Toast.show({
            type: 'info',
            text1: 'Informação',
            text2: `O item "${tarefa.text}" foi apagado.`,
            position: 'bottom'
        });
    }

    return (
        <View style={styles.appContainer}>

            {/* Insere aqui o componente DigitaTarefa, passando a função */}
            {/* adicionaTarefa criada acima via props onAdicionaTarefa:  */}
            <DigitaTarefa onAdicionaTarefa={adicionaTarefa} />

            <View style={styles.goalsContainer}>
                <FlatList
                    data={listaTarefas}
                    keyExtractor={(item, index) => { return item.id; }}
                    renderItem={(itemData) => {
                        return <ItemTarefa
                            texto={itemData.item.text}
                            id={itemData.item.id}
                            aoApagar={apagaTarefa}
                        />;
                    }}
                />
            </View>

            <Toast />

        </View>
    );
}
const styles = StyleSheet.create(
    {
        appContainer: {
            flex: 1,
            paddingTop: 50,
            paddingHorizontal: 16
        },
        goalsContainer: {
            flex: 5
        }
    },
)
