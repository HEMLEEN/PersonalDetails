// Pre loading Function.....
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector("#loading").classList.add("active");
  } else {
    document.querySelector(".container").classList.remove("active");
  }

  fadeOut();
};
function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 4000);
}

var emptyRow =
  "<tr><td colspan='6' class='text-center'> No Records Available</td></tr>";

var emptyNewRow = "<tr class='trNewRow'>";

emptyNewRow = emptyNewRow + "<td class='tdID' >";
emptyNewRow =
  emptyNewRow +
  "<input type='text' id='demo' class='form-control txtID' placeholder='Enter ID'/>";
emptyNewRow = emptyNewRow + " </td>";
emptyNewRow = emptyNewRow + "    <td class='tdName'>";
emptyNewRow =
  emptyNewRow +
  "        <input type='text' id='demo' class='form-control txtName' placeholder='Enter Name'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdCity'>";
emptyNewRow =
  emptyNewRow +
  "<form method=post><select class='form-control txtCity' style='text-transform:capitalize;'><option selected>Select State</option><option>Tamil Nadu</option><option>Kerala</option><option>Delhi</option><option>Karnataka</option><option>Maharashtra</option><option>Punjab</option><option>Rajasthan</option><option>Uttarakhand</option><option>West Bengal</option><option>Orissa</option><option>Manipur</option><option>Chhattisgarh</option><option>Arunachal Pradesh</option><option>Gujarat</option><option>Haryana</option></select></form>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdMobile'>";
emptyNewRow =
  emptyNewRow +
  "        <input type='text' id='demo' class='form-control txtMobile' placeholder='Enter Mobile'/>";
emptyNewRow = emptyNewRow + "    </td>";

emptyNewRow = emptyNewRow + "    <td class='tdEmail'>";
emptyNewRow =
  emptyNewRow +
  "        <input type='text' id='demo' class='form-control txtEmail' placeholder='Enter Email'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdAction'>";
emptyNewRow =
  emptyNewRow +
  "        <button class='btn btn-sm btn-success btn-save'> Save</button>";
emptyNewRow =
  emptyNewRow +
  "        <button class='btn btn-sm btn-success btn-cancel'> Cancel</button>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "</tr>";

var rowButtons =
  "<button class='btn btn-success btn-sm btn-edit' > Edit </button>  <button class='btn btn-danger btn-sm' > Delete </button> ";
var rowUpdateButtons =
  "<button class='btn btn-success btn-sm btn-save' > Update </button>  <button class='btn btn-danger btn-sm btn-save' > Cancel </button> ";

$(document).ready(function () {
  debugger;

  $("#tblData tbody").append(emptyRow); // adding empty row on page load

  $("#btnAdd").click(function () {
    debugger;
    if ($("#tblData tbody").children().children().length == 1) {
      $("#tblData tbody").html("");
      swal("Are you Sure adding data?");
    }
    debugger;
    $("#tblData tbody").append(emptyNewRow); // appending dynamic string to table tbody
  });

  $("#tblData").on("click", ".btn-save", function () {
    const ID = $(this).parent().parent().find(".txtID").val();
    $(this)
      .parent()
      .parent()
      .find(".tdID")
      .html("" + ID + "");
    const name = $(this).parent().parent().find(".txtName").val();
    $(this)
      .parent()
      .parent()
      .find(".tdName")
      .html("" + name + "");
    const city = $(this).parent().parent().find(".txtCity").val();
    $(this)
      .parent()
      .parent()
      .find(".tdCity")
      .html("" + city + "");
    const mobile = $(this).parent().parent().find(".txtMobile").val();
    $(this)
      .parent()
      .parent()
      .find(".tdMobile")
      .html("" + mobile + "");

    const Email = $(this).parent().parent().find(".txtEmail").val();
    $(this)
      .parent()
      .parent()
      .find(".tdEmail")
      .html("" + Email + "");
    $(this).parent().parent().find(".tdAction").html(rowButtons);
  });

  $("#tblData").on("click", ".btn-danger", function () {
    // registering function for delete button
    $(this).parent().parent().remove();
    if ($("#tblData tbody").children().children().length == 0) {
      $("#tblData tbody").append(emptyRow);
    }
  });

  $("#tblData").on("click", ".btn-cancel", function () {
    $(this).parent().parent().remove();
  });

  $("#tblData").on("click", ".btn-edit", function () {
    const ID = $(this).parent().parent().find(".tdID").html();

    $(this)
      .parent()
      .parent()
      .find(".tdID")
      .html(
        "<input type='text' value='" +
          ID +
          "' class='form-control txtID' placeholder='Enter ID'/>"
      );

    const name = $(this).parent().parent().find(".tdName").html();

    $(this)
      .parent()
      .parent()
      .find(".tdName")
      .html(
        "<input type='text' value='" +
          name +
          "' class='form-control txtName' placeholder='Enter Name'/>"
      );

    const city = $(this).parent().parent().find(".tdCity").html();

    $(this)
      .parent()
      .parent()
      .find(".tdCity")
      .html(
        "<input type='text' value='" +
          city +
          "' class='form-control txtCity' placeholder='Enter City'/>"
      );

    const mobile = $(this).parent().parent().find(".tdMobile").html();

    $(this)
      .parent()
      .parent()
      .find(".tdMobile")
      .html(
        "<input type='text' value='" +
          mobile +
          "' class='form-control txtMobile' placeholder='Enter Mobile'/>"
      );

    const Email = $(this).parent().parent().find(".tdEmail").html();

    $(this)
      .parent()
      .parent()
      .find(".tdEmail")
      .html(
        "<input type='text' value='" +
          Email +
          "' class='form-control txtEmail' placeholder='Enter Email'/>"
      );

    $(this).parent().parent().find(".tdAction").html(rowUpdateButtons);
  });
});

$(document).ready(function () {
  $("#search-focus").keyup(function () {
    search_table($(this).val());
  });

  // Search method for tables row

  function search_table(value) {
    $("#tblData tbody tr").each(function () {
      var found = "false";
      $(this).each(function () {
        if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
          found = "true";
        }
      });
      if (found == "true") {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
});

function fnRemove() {
  $("#delete_el").on("click", function () {
    $(this).parent().parent().remove("#tblData tbody");
    $("#tblData tbody").html("");
  });
}
