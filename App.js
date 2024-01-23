import { View, Text, Switch, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [darktheme, setDarkTheme] = useState(false);
  const[result, setResult] = useState('1 2 3 4 5 ');

  const colors ={

    dark: '#22252D',
    dark1:'#292B36',
    dark2:'#272B33',
    light:'#FFF',
    light1:'#F1F1F1',
    light2:'#F7F7F7'

  }

  const getColor = (light, dark) => darktheme ? dark : light;



  return (
    <View style={{height:'100%', width:'100%', paddingVertical:20, alignItems:'center', backgroundColor:darktheme ? colors.dark: colors.light  }}>
      <Switch  value={darktheme} onValueChange={()=> setDarkTheme(!darktheme)} 
      thumbColor={darktheme ? colors.light : colors.dark} trackColor={{true:colors.light2 , false:colors.dark2 }} />
      <Text style = {{ fontSize: 30, color: getColor(colors.dark,colors.light), position:'absolute' ,marginTop:150, }}>
        {result}
      </Text>
      
     



      <View style={{flexDirection:'row', flexWrap:'wrap', backgroundColor:getColor(colors.light1,colors.dark1),marginTop:170, paddingBottom: 30}}   >


        <TouchableOpacity 
         style={styles.btn} >
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center', color: getColor(colors.dark,colors.light),}}>
            7
          </Text>
        </TouchableOpacity>
        
        

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            8
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} >
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            9
          </Text>
        </TouchableOpacity >

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            X
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            4
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            5
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            6
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            -
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            +
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            0
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            .
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            %
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:25,color:'black' , textAlign:'center', textAlignVertical:'center',color: getColor(colors.dark,colors.light),}}>
            =
          </Text>
        </TouchableOpacity>

       

      </View>
    </View>
  )
}

export default App

const styles=StyleSheet.create({

  btn:{
    padding:20,
    borderRadius:10,
    elevation:3,
   
    height:70,
    width:70,
    margin:16,
    
  }
})

