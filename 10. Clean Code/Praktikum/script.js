var productId = 0;

function addProduct() {
  var productName = document.getElementById("productName").value;
  var productCategory = document.getElementById("productCategory").value;
  var productFreshness = document.getElementById("productFreshness").value;
  var additionalDescription = document.getElementById(
    "additionalDescription"
  ).value;
  var productPrice = document.getElementById("productPrice").value;

  if (
    !productName ||
    !productCategory ||
    !productFreshness ||
    !additionalDescription ||
    !productPrice
  ) {
    alert("Please fill all fields.");
    return;
  }

  var table = document
    .getElementById("productTable")
    .getElementsByTagName("tbody")[0];

  var newRow = table.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);

  cell1.innerHTML = productId++;
  cell2.innerHTML = productName;
  cell3.innerHTML = productCategory;
  cell4.innerHTML = "Default Image";
  cell5.innerHTML = productFreshness;
  cell6.innerHTML = additionalDescription;
  cell7.innerHTML = productPrice;

  document.getElementById("productForm").reset();
}

function searchProduct() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("productTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Delete product (for simplicity, this deletes the first product)
function deleteProduct() {
  var table, tr;
  table = document.getElementById("productTable");
  tr = table.getElementsByTagName("tr");
  if (tr.length > 1) {
    table.deleteRow(1); // Deletes the first product (second row in the table)
  } else {
    alert("No product to delete!");
  }
}
