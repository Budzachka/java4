const LENGTH = 117;

function generateSparseArray(length, gapSize = 1) {
  const arr = new Array(length);
  for (let i = 0; i < length; i += gapSize) {
    arr[i] = Math.floor(Math.random() * 178);
  }
  return arr;
}

function generateArray(length) {
  const arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * 178);
  }
  return arr;
}

function moveUndefinedToEnd(arr) {
  const result = [];
  const undefinedValues = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "undefined") {
      undefinedValues.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result.concat(undefinedValues);
}

function formatSparseArrayForHTML(sparseArray) {
  let html = "<ul>";

  for (let i = 0; i < sparseArray.length; i++) {
    if (typeof sparseArray[i] !== "undefined") {
      html += `<li>Index ${i}: ${sparseArray[i]}</li>`;
    } else {
      html += `<li>Index ${i}: Undefined</li>`;
    }
  }

  html += "</ul>";
  return html;
}

const sortButton = document.getElementById("sort-button");
const resultDiv = document.getElementById("result");
let array = new Array(LENGTH);

sortButton.addEventListener("click", () => {
  if (document.getElementById("sparseArr").checked) {
    array = generateSparseArray(LENGTH, 2);
    console.log("Sparse array:");
    console.log(array);
    console.log("Move Undefined To End");
  } else if (document.getElementById("array").checked) {
    array = generateArray(LENGTH);
    console.log("Array:");
    console.log(array);
  } else {
    alert("Please enter a type of array");
  }

  const unsortedArray = moveUndefinedToEnd(array.slice());

  if (document.getElementById("asc").checked) {
    console.log(
      "Exchange Sort (Ascending):",
      SortArray.exchangeSort(unsortedArray.slice())
    );
    console.log(
      "Min Element Sort (Ascending):",
      SortArray.minElementSort(unsortedArray.slice())
    );
    console.log(
      "Insertion Sort (Ascending):",
      SortArray.insertionSort(unsortedArray.slice())
    );
    console.log(
      "Shell Sort (Ascending):",
      SortArray.shellSort(unsortedArray.slice())
    );
    console.log(
      "Quick Sort (Ascending):",
      moveUndefinedToEnd(SortArray.quickSort(unsortedArray.slice()))
    );

    document.getElementById("result").innerHTML =
      "RESULT : " +
      formatSparseArrayForHTML(SortArray.exchangeSort(unsortedArray.slice()));
  } else if (document.getElementById("desc").checked) {
    console.log(
      "Exchange Sort (desc):",
      SortArray.exchangeSort(unsortedArray.slice(), "desc")
    );
    console.log(
      "Min Element Sort (desc):",
      SortArray.minElementSort(unsortedArray.slice(), "desc")
    );
    console.log(
      "Insertion Sort (desc):",
      SortArray.insertionSort(unsortedArray.slice(), "desc")
    );
    console.log(
      "Shell Sort (desc):",
      SortArray.shellSort(unsortedArray.slice(), "desc")
    );
    console.log(
      "Quick Sort (desc):",
      moveUndefinedToEnd(SortArray.quickSort(unsortedArray.slice(), "desc"))
    );

    document.getElementById("result").innerHTML =
      "RESULT : " +
      formatSparseArrayForHTML(
        SortArray.exchangeSort(unsortedArray.slice(), "desc")
      );
  } else {
    alert("Please enter a type of sorting");
  }
});
