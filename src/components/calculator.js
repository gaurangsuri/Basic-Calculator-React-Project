import React from 'react';
class Calculator extends React.Component{
    constructor(){
        super();
        this.state={a:0,b:0,result:0};
    }
    update=(fname)=>(event)=>{
        this.setState({...this.state,[fname]:event.target.value});
    }
    add=()=>{
        this.setState({result:parseInt(this.state.a)+parseInt(this.state.b)});
    }
    sub=()=>{
        this.setState({result:parseInt(this.state.a)-parseInt(this.state.b)});
    }
    mul=()=>{
        this.setState({result:parseInt(this.state.a)*parseInt(this.state.b)});
    }
    divide=()=>{
        this.setState({result:parseInt(this.state.a)/parseInt(this.state.b)});
    }
    power=()=>{
        this.setState({result:parseInt(this.state.a)**parseInt(this.state.b)});
    }
    clear=()=>{
        this.setState({result:0});
        document.getElementById('n1').value='';
        document.getElementById('n2').value='';
    }
    render(){
        return <React.Fragment>
            <p><u>Perform Maths Operations between two numbers</u></p>
            <br/>
            <div>
                <input type={'number'} onChange={this.update('a')} id='n1' placeholder='Enter First Number' />
                <br/><br/>
                <input type={'number'} onChange={this.update('b')} id='n2' placeholder='Enter Second Number' />
                <br/><br/>
                <button onClick={this.clear} id='clr'> CLEAR </button>
                <div id='act'>
                    <p>Action to perform</p>
                    <button onClick={this.add} className='but'>+</button>
                    <button onClick={this.sub} className='but'>-</button>
                    <button onClick={this.mul} className='but'>*</button>
                    <button onClick={this.divide} className='but'>/</button>
                    <button onClick={this.power} className='but'>^</button>
                </div>
                <br/><br/>
                <div id='res'>
                    RESULT
                    <br/>
                    <h1>{this.state.result}</h1>
                </div>
            </div>
        </React.Fragment>
    }
}
export default Calculator;