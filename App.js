import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';


export default function App() {

    // Estado para armazenar o que foi digitado na caixa:
    const [textoTarefa, setTextoTarefa] = useState('');

    // Estado para armazenar a lista de tarefas:
    const [listaTarefas, setListaTarefas] = useState([]);

    function goalInputHandler(textoDigitado) {
        // Quando o texto muda na caixa, o novo texto é armazenado
        // no estado criado acima:
        setTextoTarefa(textoDigitado);
    }

    function adicionaTarefa() {
        setListaTarefas(listaAtual => [
            ...listaAtual,
            { text: textoTarefa, id: Math.random().toString() }
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Digite sua tarefa'
                    onChangeText={goalInputHandler} />
                <Button
                    title="Criar Tarefa"
                    onPress={adicionaTarefa} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    // prop data: a fonte de dados da lista.
                    // Neste exemplo, nosso array em listaTarefas:
                    data={listaTarefas}
                    // prop renderItem: função responsável por renderizar 
                    //                  cada item da lista.
                    // A função recebe por parâmetro o conteúdo do item a ser renderizado
                    // (elemento do array listaTarefas indicado acima), e retorna o JSX.
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.goalItem}>
                                <Text style={styles.goalText}>
                                    {itemData.item.text}
                                </Text>
                            </View>
                        );
                    }}

                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />

            </View>


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
        inputContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: '#cccccc',
            marginBottom: 10
        },

        textInput: {
            borderWidth: 1,
            borderColor: '#cccccc',
            width: '65%',
            marginRight: 8,
            padding: 8
        },
        goalsContainer: {
            flex: 5
        },
        goalItem: {
            margin: 8,
            padding: 8,
            borderRadius: 6,
            backgroundColor: '#487d76'
        },
        goalText: {
            fontSize: 20,
            color: 'white'
        }

    },
);
