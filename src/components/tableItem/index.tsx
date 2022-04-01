import * as C from './styles';
import { typeItem } from '../../types/typesItem';
import { categories } from '../../data/categories';
import { formatDate } from '../../helpers/dateFIlter';

type Props = {
    item: typeItem;
}

export const TableItem = ({ item }: Props)=> {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}