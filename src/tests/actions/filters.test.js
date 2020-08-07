import moment from 'moment';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate } from '../../actions/filters'

test('set start date action object',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:moment(0)
    })
})

test('set end date action object',() =>{
    const action =setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate:moment(0)
    })
})

test('set text filter with provided value',()=>{
    const text="abcbadada"
    const action=setTextFilter(text)
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text
    })
})

test('set text filter with defualt value',()=>{
    const action=setTextFilter()
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
    })
})

test('set sort by date action object',() => {
    const action=sortByDate()
    expect(action).toEqual({
        type:"SORT_BY_DATE"
    })
})

test('set sort by amount action object',() => {
    const action=sortByAmount()
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    })
})