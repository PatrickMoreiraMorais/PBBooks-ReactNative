import CardBook from "./CardBook";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
export default function BookList({ book, onPressItem }) {
  function renderItem({ item }) {
    return (
      <View>
        <TouchableOpacity key={book.id} onPress={() => onPressItem(item)}>
          <CardBook book={item} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.containerFlex}>
      <FlatList data={book} renderItem={renderItem} />
    </View>
  );
}
const styles = StyleSheet.create({
  containerFlex: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
