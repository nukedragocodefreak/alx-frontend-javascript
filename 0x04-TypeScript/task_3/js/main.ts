import * as CRUD from './crud';


const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const updatedRow: RowElement = {
    ...row,
    age: 34
}

const neRowID: RowID = CRUD.updateRow(newRowID, updatedRow);
const UpdateRow: RowID = CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(neRowID);

