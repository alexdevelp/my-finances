import * as C from './styles';
import { TableItem } from '../tableItem';
import { typeItem } from '../../types/typesItem';

type Props = {
    list: typeItem[];
}

export const TableArea = ({ list }: Props) => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100} >Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index)=> (
                        <TableItem key={index} item={item} />
                    ))
                }
            </tbody>
        </C.Table>
    );
}