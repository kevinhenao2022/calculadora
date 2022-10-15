import { StyleSheet, Text, View } from 'react-native';
import { styles } from './assets/estilos/estilos1';
import Banner from './components/Banner'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Banner></Banner>
        <View style={{flex:4,backgroundColor:'yellow',width:'80%',marginLeft:'10%',flexDirection:'row',marginBottom:10}}>
        
        <View style={{backgroundColor:'pink',width:'33%'}}>
          <Text>cuerpo 1 </Text>
        </View>

        <View style={{backgroundColor:'aqua',width:'33%'}} >
          <Text>cuerpo 2 </Text>
        </View>

        <View style={{backgroundColor:'gray',width:'33%'}}>
          <Text>cuerpo 3 </Text>
        </View>
      </View>

      <View style={{flex:2,backgroundColor:'aqua',width:'80%',marginLeft:'10%',marginBottom:10}}>
        <Text>footer</Text>
      </View>
      
    </View>
  );
}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: 'orange',
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
  //text:{
   // color:'red',
    //fontSize:21
  //}
//});
