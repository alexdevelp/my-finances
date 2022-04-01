import { typeItem } from "../types/typesItem";

export const getCurrentMonth = () => {
    //pegando mes e ano atual
    let now = new Date();

    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: typeItem[], date: string): typeItem[] => {
    //filtrando lista pela data
    let newList: typeItem[] = [];

    let [year, month] = date.split('-');

    for(let i in list){
        if(
           list[i].date.getFullYear() === parseInt(year) &&
           (list[i].date.getMonth()+1) === parseInt(month)
        ){
            newList.push(list[i]);
        }
    }


    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}


export const formatCurrentMonth = (currentMonth: string) => {
    let [ year, month ] = currentMonth.split('-');
    let months = ['Janeiro',' Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${months[parseInt(month) - 1]} de ${year}`;
}


const addZeroToDate = ( n: number ): string =>{
    if(n < 10){
        return `0${n}`;
    }else{
        return `${n}`
    }
}


export const newDataAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-');
    return new Date(parseInt(year), parseInt(month) -1, parseInt(day));
}
