import { View, Text, StyleSheet } from "react-native";
export default function ({ route }) {
  const { book } = route.params;
  console.log(book);

  return (
    <View>
      <Text style={styles.textStyle}>
        <Text style={styles.textBold}>Sinopse:</Text> {book.synopsis}
      </Text>

      <Text style={styles.textStyle}>
        <Text style={styles.textBold}> Formato: </Text>
        {book.format}
      </Text>
      <Text style={styles.textStyle}>
        <Text style={styles.textBold}> Páginas: </Text>
        {book.pages}
      </Text>
      <Text style={styles.textStyle}>
        <Text style={styles.textBold}> Nota: </Text>
        {book.rating}
      </Text>
      <Text style={styles.textStyle}>
        <Text style={styles.textBold}>Ano de Publicação: </Text>
        {book.publication_year}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textBold: {
    fontWeight: "bold",
  }, textStyle: {
    fontSize: 16,
  }
});
