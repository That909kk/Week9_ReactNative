import {Text,Image,Pressable,View,TextInput,StyleSheet,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import heart from '../assets/heart.png'
import bikeblue from '../assets/xenho1.png' 
const data=[{
  id:1,
  img:'https://picsum.photos/200',
  name:'Pinarelo',
  price:1800,
  type:'Roadbike',
  des:'Hehe',
  discount:10,
  liked:2

},
{
  id:2,
  img:'https://picsum.photos/200',
  name:'Pina Mountain',
  price:1700,
  type:'Mountainbike',
  des:'Hehe',
  discount:10,
  liked:3

},
];
const autorenderlist = ({ item }) => {
    return (
      
        <Pressable style={styles.itemreder}>
          <Pressable style={{
            position:'absolute',
            top :5,
            left:5,
            width:19,
            height:19,
          }}>
          <Image source={heart}/>
          </Pressable>
        <Image source={item.img} style={{
        position:'absolute',
           top :5,
            left:30,
          width:120,height:137}}/>

          <Text style={{
            position:'absolute',
             top :150,
            left:50,
            fontFamily:'Voltaire',
            fontWeight:400,
            fontSize:20,
            lineHeight:24.91,
            textAlign:'center',
          }}>{item.name}</Text>
        
        </Pressable>



    )};
const  MyApp=()=>{
    const navigation = useNavigation();
      return(
       <View style={{
         flex:1,
         justifyContent:'center',
         alignItems:'start',
         backgroundColor:"white"
       }}>
       <Text style={{
         fontFamily:'Ubuntu',
         fontSize:25,
         fontWeight:700,
         lineHeight:28.73,
         textAlign:'center',
         color:'#E94141'
       }}
       >The world’s Best Bike</Text>
       <View style={{
         width:'100%',
         alignItems:'center',
         justifyContent:'space-around',
          flexDirection:'row',
          marginTop:20,
       }} >
       
       <Pressable style={styles.button}>
       <Text style={styles.buttontext}>All</Text>
       </Pressable>
       <Pressable style={styles.button}>
       <Text style={styles.buttontext}>RoadBike</Text>
       </Pressable>
       <Pressable style={styles.button}>
       <Text style={styles.buttontext}>Mountain</Text>
       </Pressable>
       </View>
       
        <FlatList style={{width:'100%',flex:1}} data={data} renderItem={autorenderlist} keyExtractor={item => item.id}  numColumns='2' >
       
       </FlatList>
      
      

       
       
       
       
       </View>
      );
};
export default MyApp;

const styles = StyleSheet.create({
  button: {
   width:"30%",
   height:45,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderColor:'#E9414187',
    borderWidth:1,

  },
  buttontext:{
    fontFamily:'Voltaire',
    fontSize:20,
    fontWeight:400,
    lineHeight:24.91,
    textAlign:'center',
    color:'#E94141'
  },
  itemreder:{
    width:'45%',
    height:200,
    borderRadius:10,
    backgroundColor:'#F7BA8326',
    marginLeft:11,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:10
  }
});