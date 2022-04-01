import { formatCurrentMonth } from '../../helpers/dateFIlter';
import { ResumeItem } from '../resumeItem';
import * as C from './style';

type Props ={
    income: number;
    expense: number;
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

    const handlePrevMonth = () => {
        const [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) -1, 1);

        currentDate.setMonth(currentDate.getMonth() - 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);

    }

    const handleNextMonth = () => {
        const [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) -1, 1);

        currentDate.setMonth(currentDate.getMonth() + 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }


    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>
                    &#9664;&#65039;
                </C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>
                    &#9654;&#65039;
                </C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem 
                    title="Receitas"
                    value={income}
                />
                <ResumeItem 
                    title="Despesas" 
                    value={expense} 
                />
                <ResumeItem 
                    title="Balanço" 
                    value={income - expense} 
                    color={(income - expense) < 0 ? 'red': 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    );
}