import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Image } from "react-native";
import Toast from 'react-native-toast-message';

function DigitaTarefa(props) {
    // Estado para armazenar o que foi digitado na caixa
    // (Veio lá de App.js, já que agora a caixa de texto
    // está aqui):
    const [textoTarefa, setTextoTarefa] = useState('');
    // Função que é chamada quando o texto muda na caixa de texto,
    // colocando o textoDigitado no estado criado acima.
    // Também veio lá de App.js, já que agora a caixa de texto
    // e o estado estão aqui:
    function goalInputHandler(textoDigitado) {
        setTextoTarefa(textoDigitado);
    }
    // Este componente vai receber, via props, uma função criada
    // lá em App.js (props onAdicionaTarefa).
    // Esta função recebe por parâmetro o texto da tarefa digitada
    // (que está no estado 'textoTarefa' deste componente)
    // e usa o 'setter' do estado 'lista de tarefas'
    // (que também está lá em App.js) para inserir o texto recebido
    // por parâmetro na lista.
    //
    // Estamos criando aqui uma função que vai ser chamada quando o botão
    // for pressionado. Esta função chama a função de App.js explicada acima,
    // passando pra ela por parâmetro o texto da tarefa digitada.
    // Aproveitamos para esvaziar o estado com o texto da tarefa,
    // para deixar a caixa vazia para a próxima digitação.

    function adicionaTarefa() {
        if (textoTarefa === "") {
            Toast.show({
                type: 'error',
                text1: 'Erro! Precisa digitar o texto da tarefa!',
                // text2: 'Precisa digitar o texto da tarefa!',
                position: 'bottom' //top, center...
            });
        }
        else {
            // Chamando a função criada lá em App.js, e enviada via props.
            // Passando o texto da tarefa por parâmetro:
            props.onAdicionaTarefa(textoTarefa);
            // Esvaziando a caixa de texto:
            setTextoTarefa('');
        }
    }



    return (
        <View style={styles.containerExterno}>
            <View style={styles.containerInterno}>
                <Image
                    source={require('../assets/imagem.png')}
                    style={styles.imagem}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua tarefa'
                    onChangeText={goalInputHandler}
                    value={textoTarefa}
                />
                <Button
                    title="Criar Tarefa"
                    onPress={adicionaTarefa}
                />
            </View>
        </View>
    );

};
export default DigitaTarefa;

// Estilos CSS trazidos lá de App.js:
const styles = StyleSheet.create({
    containerExterno: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 10,
    },
    containerInterno: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 40
    },
    imagem: {
        width: 40,
        height: 40,
        marginRight: 8,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginRight: 8,
        borderRadius: 4,
    }
});
