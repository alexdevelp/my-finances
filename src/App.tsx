import { 
  useState,
  useEffect,
} from 'react';
import * as C from './App.styles';
import { items } from './data/items';
import { typeItem } from './types/typesItem';
import { categories } from './data/categories';
import { TableArea} from './components/tableArea';
import { typeCategory } from './types/typeCategory';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFIlter';
import { InfoArea } from './components/infoArea';
import { InputArea } from './components/inputArea';
const App = ()=> {

  const [ list, setList ] = useState(items);
  const [ income, setIncome ] = useState(0);
  const [ expense, setExpense ] = useState(0);
  const [ filteredList, setFilteredList ] = useState<typeItem[]>([]);
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: typeItem) => {
    let newList = [...filteredList];
    newList.push(item);
    setFilteredList(newList);
  }


  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
    
  }, [filteredList])

  return(
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
      </C.Header>
      <C.Body>


        <InfoArea 
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App;