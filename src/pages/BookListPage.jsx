import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { StyleSheet, View, TextInput, Button, TouchableOpacity} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

export default function BookListPage() {
  const [arrayBooks, setArrayBooks] = useState([]);
  const [state, setState] = useState("");
  const [genre, setGenre] = useState("");


  async function request() {
    try {
      const response = await fetch(
        "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json"
      );
      if (response.ok) {
        const data = await response.json();
        const books = Object.values(data);
        const ids = Object.keys(data);
        const bookList = books.map((book, index) => {
          return { id: ids[index], ...book };
        });
        setArrayBooks(bookList);
      }
    } catch (error) {
      console.error(`Ocorreu um erro na requisição: ${error}`);
    }
  }
  useEffect(() => {
    request();
  }, []);

  const filterBooksList = arrayBooks.filter((book) => {
    if (state) {
      return (
        book.author.toLowerCase().includes(state.toLowerCase()) ||
        book.title.toLowerCase().includes(state.toLowerCase())
      );
    }
    return book.genre.toLowerCase().includes(genre.toLowerCase());
  });

const navigation = useNavigation();
  const pressNavigate = (selectedBook) => {

    navigation.navigate('List Books Details', { book: selectedBook });
  };


  return (
    <View style={styles.body}>
      <TextInput
        value={state}
        onChangeText={setState}
        placeholder="Digite o filtro de Busca"
        style={styles.input}
      />
      <Picker
        selectedValue={genre}
        onValueChange={(itemValue) => setGenre(itemValue)}
      >
        <Picker.Item label="Escolha um Gênero" value="" />
        <Picker.Item label="Ficção Distópica" value="Ficção Distópica" />
        <Picker.Item label="Realismo Mágico" value="Realismo Mágico" />
        <Picker.Item label="Romance Clássico" value="Romance Clássico" />
        <Picker.Item label="Fantasia" value="Fantasia" />
        <Picker.Item label="Alegoria Política" value="Alegoria Política" />
        <Picker.Item label="Suspense" value="Suspense" />
        <Picker.Item label="Ficção Clássica" value="Ficção Clássica" />
        <Picker.Item label="Ficção Crescimento" value="Ficção Crescimento" />
        <Picker.Item label="Ficção Filosófica" value="Ficção Filosófica" />
      </Picker>
      <BookList book={filterBooksList} 
    onPressItem={(selectedBook) => pressNavigate(selectedBook)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
  },
  input: {
    backgroundColor: "#B5B682",
    color: "#fff",
  },
});
