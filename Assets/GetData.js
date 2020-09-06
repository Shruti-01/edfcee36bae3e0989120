import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';


class GetData extends Component{
    constructor(){
        super()
        state={
            resultData:[],
            tableData:[],
            tableHeader:['Created_at','Title','URL','Author']
        }
    }
    componentDidMount(){
        this.timer=setInterval(()=>this.getdatas(),10000)
    }

   async getdatas(){
        fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0',{method:"GET"})
        .then((response) =>{return response.json()}) // <=== Parses the JSON
        .then((responseJson) => { 
            var resultData =responseJson.hits
            var resultset=[]
           for(let i=0;i<resultData.length-1;i++){
               for(let j=0;j<4;j++){
                    resultset.push(resultData[i][j])
               }
           }
             this.setState({
                 tableData:resultset
             })
        })
        .catch(error=>{
            console.warn(error)
        })
}
    render(){
        return(
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.tableHeader} style={styles.head} textStyle={styles.text}/>
                    <Rows data={state.tableData} textStyle={styles.text}/>
                </Table>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });
export default GetData