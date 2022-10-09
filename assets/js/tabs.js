function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function openTab2(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

function formatRows() {
    return '<tr id="addRow"><td style="border-bottom: 0px;padding: 0px;"><div class="form-group"><input type="text" class="form-control" id="exampleInputName1" placeholder="Topic"></div></td>' + '<td style="border-bottom: 0px;padding: 0px;margin-top:20px"><a href="#" onClick="deleteRow(this)" class="btn btn-gradient-danger btn-fw" style="margin-top:-20px;"><span class="addBtn"><i class="mdi mdi-minus"></i></span></a></td>';
};

function formatRows2() {
  return '<tr id="addRow2"><td style="border-bottom: 0px;padding: 0px;"><div class="form-group"><input type="text" class="form-control" id="exampleInputName1" placeholder="Lesson"></div></td>' + '<td style="border-bottom: 0px;padding: 0px;margin-top:20px"><a href="#" onClick="deleteRow(this)" class="btn btn-gradient-danger btn-fw" style="margin-top:-20px;"><span class="addBtn"><i class="mdi mdi-minus"></i></span></a></td>';
};

function deleteRow(trash) {
  $(trash).closest('tr').remove();
};

function addRow() {
    $(formatRows()).insertAfter('#addRow');
    $(formatRows2()).insertAfter('#addRow2');
    }

    $('.addBtn').click(function()  {
    addRow();
});

