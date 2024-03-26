import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function CardBook({book}) {

    
    return(
        <View key={book.id} style={styles.container}>
            <Text style={styles.header}>{book.title}</Text>
            <View style={styles.containerImage}> 
            <Image source={{uri: book.cover}}
            style={styles.image}
            />
            </View>
            <View>
                <Text style={styles.textInfo}>
                    {book.author}
                </Text>
                <Text style={styles.textInfo}>
                    {book.genre}
                </Text>
                <Text style={[styles.textInfo, styles.price]}>
                    R${book.price}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(({
    header:{
        fontSize: 20,
        fontWeight: 'bold'
    }, image:{
        width: 100,
        height: 150,
    },
    container:{
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        width: 400,

    },
    textInfo: {
        textAlign: 'center'
    },
    price: {
        color: 'green',
    }
   
}))