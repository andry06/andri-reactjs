import React from "react";

import PropTypes from "prop-types";
let pelangi = ["1. Merah", "2. Jingga", "3. Kuning", "4. Hijau", "5.Biru", "6. Nila", "7. Ungu"];
class ClassComponent extends React.Component {
   
    state = {
        value : 0,
    }

    handlePlus = () => {
        if(this.state.value < 6){
            this.setState({value : this.state.value + 1})
        }
    }

    handleMinus = () => {
        if(this.state.value > 0){
            this.setState({value : this.state.value - 1})
        }
        
    }

    render(){
        return(
            <div>
                <h1>URUTAN WARNA PADA PELANGI</h1>
                
                <p>{' '}{pelangi[this.state.value]}{' '}</p>
                
                <button class="btn btn-danger me-2" onClick={this.handleMinus}> - </button>
                <button class="btn btn-success ms-2" onClick={this.handlePlus}> + </button>
            </div>
        )
    }
}
export default ClassComponent;