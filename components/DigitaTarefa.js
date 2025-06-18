import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

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
        // Chamando a função criada lá em App.js, e enviada via props.
        // Passando o texto da tarefa por parâmetro:
        props.onAdicionaTarefa(textoTarefa);
        // Esvaziando a caixa de texto:
        setTextoTarefa('');
    }


    return (
        <View style={styles.inputContainer}>
            
            <TextInput
                style={styles.textInput}
                placeholder='Digite sua tarefa'
                // Função chamada quanto o texto é alterado:
                onChangeText={goalInputHandler}
                // O value abaixo faz com que o valor exibido no campo de texto
                // seja controlado pela variável ('getter') textoTarefa:
                value={textoTarefa}
            />
            <Button
                title="Criar Tarefa"
                // Ao clicar no botão, chama a função adicionaTarefa
                // criada e explicada acima:
                onPress={adicionaTarefa}
            />
        </View>
    );
};
export default DigitaTarefa;

// Estilos CSS trazidos lá de App.js:
const styles = StyleSheet.create(
    {
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
            width: '70%',
            marginRight: 8,
            padding: 8
        }
    },
);

