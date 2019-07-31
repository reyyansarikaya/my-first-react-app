import React, {Component} from 'react';
import axios from 'axios';

class MyDataComponent extends Component {

       state = {
       count: 1,
       elements: []
       };
    componentDidMount(){

        console.log("data component mounted");
        this.retrieveData();

        };
    }
    render() {
       let myTableData = this.state.elements.map((element, elIndex) => {
       return <tr key={elIndex} >
       <td>{element.id}</td>
       <td>{element.title}</td>
       </tr>;
       });
       let myTable = <table border ="1">
             <thead>
             <tr>
                <th>ID</th>
                <th>Title</th>
              </tr>
              </thead>
           <tbody>
                {myTableData}
           </tbody>
           </table>;

       return <div> this is my data component </div>;
       <br/>
       <button onClick={() => this.retrieveData()}> retrieve next data </button>
       <br/>
       {myTable}
 </div>;
    }

}
export default MyDataComponent;