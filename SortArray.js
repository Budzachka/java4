(function (window) {
  let SortArray = {};

  // Метод обміну (Bubble Sort)
  SortArray.exchangeSort = function (array, order = "asc") {
    let comparisons = 0;
    let exchanges = 0;
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        comparisons++;
        if (
          order === "asc" ? array[j] > array[j + 1] : array[j] < array[j + 1]
        ) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          exchanges++;
        }
      }
    }

    console.log(
      `Exchange Sort: Comparisons - ${comparisons}, Exchanges - ${exchanges}`
    );
    return array;
  };

  // Метод мінімальних елементів (Selection Sort)
  SortArray.minElementSort = function (array, order = "asc") {
    let comparisons = 0;
    let exchanges = 0;
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < length; j++) {
        comparisons++;
        if (
          order === "asc"
            ? array[j] < array[minIndex]
            : array[j] > array[minIndex]
        ) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        exchanges++;
      }
    }

    console.log(
      `Min Element Sort: Comparisons - ${comparisons}, Exchanges - ${exchanges}`
    );
    return array;
  };

  // Метод вставок (Insertion Sort)
  SortArray.insertionSort = function (array, order = "asc") {
    let comparisons = 0;
    let exchanges = 0;
    const len = array.length;

    for (let i = 1; i < len; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && (order === "asc" ? array[j] > key : array[j] < key)) {
        comparisons++;
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key;
      exchanges++;
    }

    console.log(
      `Insertion Sort: Comparisons - ${comparisons}, Exchanges - ${exchanges}`
    );
    return array;
  };

  // Метод Шелла
  SortArray.shellSort = function (array, order = "asc") {
    let comparisons = 0;
    let exchanges = 0;
    const len = array.length;
    let gap = Math.floor(len / 2);

    while (gap > 0) {
      for (let i = gap; i < len; i++) {
        let temp = array[i];
        let j = i;
        while (
          j >= gap &&
          (order === "asc" ? array[j - gap] > temp : array[j - gap] < temp)
        ) {
          comparisons++;
          array[j] = array[j - gap];
          j -= gap;
          exchanges++;
        }
        array[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }

    console.log(
      `Shell Sort: Comparisons - ${comparisons}, Exchanges - ${exchanges}`
    );
    return array;
  };

  // Метод Хоара (Quick Sort)
  SortArray.quickSort = function (array, order = "asc") {
    let comparisons = 0;
    let exchanges = 0;
    const partition = (arr, low, high) => {
      let pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        comparisons++;
        if (order === "asc" ? arr[j] < pivot : arr[j] > pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          exchanges++;
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    };

    function quickSortUtil(arr, low, high) {
      if (low < high) {
        let pi = partition(arr, low, high);
        quickSortUtil(arr, low, pi - 1);
        quickSortUtil(arr, pi + 1, high);
      }
    }

    quickSortUtil(array, 0, array.length - 1);

    console.log(
      `Quick Sort:Comparisons - ${comparisons}, Exchanges - ${exchanges}`
    );
    return array;
  };

  window.SortArray = SortArray;
})(window);
