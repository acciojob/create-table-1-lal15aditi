function insert_Row() {
    //Write your code here
  const table = document.getElementById('sampleTable');
  const newRow = table.insertRow(0); // Insert a row at the top (index 0)

  // Insert cells into the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set the values for the new cells
  cell1.textContent = 'New Cell1';
  cell2.textContent = 'New Cell2';
  
}
