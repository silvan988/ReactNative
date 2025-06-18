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
                        return <ItemTarefa itemtexto={itemData.item.text} />;
                        {/* itemtexto vem de itemTarefa.js, "props.itemtexto" */}
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
