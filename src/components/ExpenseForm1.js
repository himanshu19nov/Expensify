import React, { useState } from 'react';
import moment from 'moment';
import DatePicker  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const now = moment();
console.log(now.format('MMM Do, YYYY'));
export default class ExpenseForm extends React.Component{

    state = {
        description: '',
        note: '',
        amount: '',
        startDate: new Date(),
        error: ''
        //calanderFocused: false
        

    }

    onTextAreaChange = (e) => {
        const note = e.target.value
        this.setState(()=>({note}));
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(()=>({description}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }
    // DatePicker = () => {
    //     const [startDate, setStartDate] = useState(new Date());
    //     return (
    //       <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    //     );
    //   };
    onDateChange = (date) => {
        if (date) {
            this.setState(()=>({startDate: date}))
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount){
            this.setState(()=>({error:"Please fill in the amount or description"}))
        }
        else{
            this.setState(()=>({error:""}))
        }
    }
    // onFocusChange = ({focused}) => {
    //     this.setState(()=>({calanderFocused:focused}))
    // }
    render(){
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type='text'
                    placeholder='description'
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    autoFocus
                    />
                    <DatePicker 
                    selected={this.state.startDate}
                    dateFormat="MM/dd/yyyy"
                    onChange={this.onDateChange}
                    monthsShown={2}
                    
                    />
                    <input
                    type='number'
                    placeholder='amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    {/* <DatePicker
                    selected={this.state.startDate}
                    onChange={this.onDateChange}
                    // focused={this.state.calanderFocused}
                    // onFocusChange={this.onFocusChange}
                    /> */}
                    <textarea
                        placeholder= "Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onTextAreaChange} 
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}