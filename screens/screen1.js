import {Text,Image,Pressable,View,TextInput,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import bikeblue from '../assets/bifour_-removebg-preview.png'
const data=[{
  img:'https://picsum.photos/200',
  name:'Pinarelo',
  price:1800,
  type:'Roadbike',
  des:'Hehe',
  discount:10,
  liked:2

},
{
  img:'https://picsum.photos/200',
  name:'Pina Mountain',
  price:1700,
  type:'Mountainbike',
  des:'Hehe',
  discount:10,
  liked:3

},
];
const  MyApp=()=>{
    const navigation = useNavigation();
      return(
       <View style={{
         flex:1,
         justifyContent:'space-around',
         alignItems:'center',
         backgroundColor:"white"
       }}>
       <Text style={{
         fontFamily:'VT323',
         fontSize:26,
         fontWeight:400,
         lineHeight:26,
         textAlign:'center'
       }}
       >A premium online store for sporter and their stylish choice</Text>
       <View style={{
         backgroundColor:'#E941411A',
         width:'90%',
         alignItems:'center',
         justifyContent:'center',

         height:250,
         borderRadius:30,
       }} >
       
       <Image source={bikeblue} style={{ width:200,
         height:190,}}/>
       </View>
       <Text  style={{
         fontFamily:'Ubuntu',
         fontWeight:700,
         fontSize:26,
         lineHeight:29.87,
         textAlign:'center',
       }}
       >POWER BIKE 
SHOP</Text>
       <Pressable style={styles.button} onPress={()=>navigation.navigate('index2')}>
       <Text style={styles.buttontext}>Get Started</Text>
       
       </Pressable>
       
       
       
       
       </View>
      );
};
export default MyApp;

const styles = StyleSheet.create({
  button: {
   width:"80%",
   height:45,
   backgroundColor:'red',
    borderRadius:20,
    justifyContent:'center'

  },
  buttontext:{
    fontFamily:'VT323',
    fontSize:27,
    fontWeight:400,
    lineHeight:27,
    textAlign:'center',
    color:'white'
  }
});