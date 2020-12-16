To dispose of a DevExtreme widget, free up the allocated resources by calling the **dispose()** method. Then, remove the UI component's associated DOM node:

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("dispose");
    $("#dataGridContainer").remove();
