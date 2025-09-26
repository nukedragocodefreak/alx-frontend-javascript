import * as CRUD from './crud';


const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const updatedRow: RowElement = {...row,age:23}

const newRowID: RowID = CRUD.insertRow(row)
const UpdateRow: RowID = CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

