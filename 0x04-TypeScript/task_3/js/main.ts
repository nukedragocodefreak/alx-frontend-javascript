import * as CRUD from './crud';


const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const rowUdpated: RowElement = {
    ...row,
    age: 34
}

const neRowID: RowID = CRUD.insertRow(row);
const UpdateRow: RowID = CRUD.updateRow(rowUdpated);
const deletetRow: RowID = CRUD.deleteRow(neRowID);

