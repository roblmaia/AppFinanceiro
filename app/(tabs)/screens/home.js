import * as React from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';

function HomeScreen({ navigation }) {
  const saldoAtual = 1000; // Defina o valor de saldoAtual aqui
  const saldoFinalMes = -2.5; // Defina o valor de saldoFinalMes aqui
  const today = new Date();
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const currentMonth = monthNames[today.getMonth()]; // Obtém o nome do mês atual
  const [selectedMonth, setSelectedMonth] = React.useState(currentMonth);

  const saldoFinalMesStyle = saldoFinalMes > 0 ? styles.saldoFinalMesValorPositivo : styles.saldoFinalMesValorNegativo;

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.currency}>Pesquisa mês</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedMonth}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
            style={styles.picker}
            mode="dropdown" // Define o modo como 'dropdown'
          >
            {monthNames.map((month) => (
              <Picker.Item key={month} label={month} value={month} style={styles.pickerItem} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.saldoFinalMesText}>
        <View>
          <Text style={styles.currency}>Saldo fim do Mês</Text>
        </View>
        <View style={saldoFinalMesStyle}>
          <Text style={styles.saldoFinalMesValor}> R$</Text>
          <Text style={styles.saldoFinalMesValor}>{saldoFinalMes.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.currency}>Saldo Atual</Text>
        <Text style={styles.currency}>R$  </Text>
        <Text style={styles.saldoAtual}>{saldoAtual.toFixed(2)}</Text>
        {/*  Utiliza toFixed(2) para duas casas decimais */}
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Ir para Receitas" onPress={() => navigation.navigate('Receitas')} />
      </View>
    </View>
a
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B8D1EC', // Cor de fundo azul claro
    padding: 20,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui os elementos igualmente
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },
  currency: {
    fontSize: 16,
    color: '#334155', // Cor de texto azul escuro
    marginRight: 5,
  },
  pickerContainer: {
    backgroundColor: '#FFFFE0', // Cor de fundo amarela
    padding: 10,
    borderRadius: 10,
  },
  picker: {
    width: 150, // Define a largura do Picker
    borderWidth: 0, // Remove a borda do Picker
    backgroundColor: 'transparent', // Define a cor de fundo como transparente
  },
  pickerItem: {
    backgroundColor: 'transparent', // Define a cor de fundo do item como transparente
  },
  saldoFinalMesText: {
    backgroundColor: '#ffffff', // Cor de fundo azul claro
    paddingStart: 20,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui os elementos igualmente
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },
  saldoAtual: {
    fontSize: 20,
    marginEnd: 5,
    fontWeight: 'bold',
    color: '#334155', // Cor de texto azul escuro
  },
  buttonContainer: {
    paddingTop: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saldoFinalMesValorPositivo: {
    backgroundColor: '#c6efce',
    paddingVertical: 20,
    paddingEnd: 20,
    paddingStart: 60,
    borderTopEndRadius: 10,
    borderEndEndRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui os elementos igualmente
    color: '006100', // Cor verde para saldo positivo
  },
  saldoFinalMesValorNegativo: {
    backgroundColor: '#ffc7ce',
    paddingVertical: 20,
    paddingEnd: 20,
    paddingStart: 60,
    borderTopEndRadius: 10,
    borderEndEndRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui os elementos igualmente
    color: '#9c0006', // Cor vermelha para saldo negativo
  },
  saldoFinalMesValor: {
    fontSize: 20,
    marginEnd: 5,
    fontWeight: 'bold',
  },
});

export default HomeScreen;