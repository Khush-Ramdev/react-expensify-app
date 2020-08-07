import {addExpense , removeExpense, editExpense} from '../../actions/expenses'

test('remove expense action genrator',()=>{
    const action=removeExpense({id:"123dada"})
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"123dada"
    })
})

test('edit expense action genrator',() => {
    const action=editExpense("123adada",{note:"new note value"})
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:"123adada",
        updates:{
            note:"new note value"
        }
    })
})

test('should set up add expense action object with provided values' ,() => {
    const expenseData={
        description:'Rent',
        amount:109500,
        note:'this months rent',
        createdAt:1000000
    };
    const action=addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
})

test('should set up add expense action object with default values' ,() => {
    const action=addExpense();
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id:expect.any(String)
        }
    })
})