import selectExpenses from '../../selectors/expenses'

const expenses=[{
    id:'0',
    description:'gum',
    note:'',
    amount:'195',
    createdAt:0
},
{
    id:'1',
    description:'Rent',
    note:'',
    amount:'195000',
    createdAt:-1000
},
{
    id:'3',
    description:'credit Card',
    note:'',
    amount:'4500',
    createdAt:1000
}]


test('should filter by text value',() => {
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([ expenses[2], expenses[1]])
});