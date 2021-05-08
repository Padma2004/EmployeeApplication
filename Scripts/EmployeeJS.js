
$(document).ready(function () {


    $('#btnAdd').click(function () {
        if ($('#addEmployeeForm').is(":visible")) {
            $('#txtUserName').val("");
            $('#txtAddress').val("");
            $('#txtPhone').val("");
            $('#txtPosition').val("Please Select");
        }
        else {
            $('#addEmployeeForm').show();
        }
    });


    $('#btnSave').click(function () {

        $('.empName').removeClass('last-added');

        var emp = {};
        emp.Name = $('#txtUserName').val();
        emp.Address = $('#txtAddress').val();
        emp.PhoneNumber = $('#txtPhone').val();
        emp.Position = $('#txtPosition').val();

        $.ajax({
            type: "POST",
            url: "/api/EmployeeAPI/InsertEmployee",
            data: JSON.stringify(emp),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (rslt) {
                var name = rslt.Name;
                var add = rslt.Address;
                $('#empTbl').append('<div class="empName last-added" style="display:table; height: 50px; overflow: hidden;"></div>');
                $('.last-added').text(rslt.Name);
            }
        });
    });



    $('.empName').click(function () {

        $('.empName').removeClass('selected');
        $(this).addClass('selected');
        var selectedEmployee= $('.empName.selected').text();

        $.ajax({
            type: "GET",
            url: "api/EmployeeAPI/GetEmployee/" + selectedEmployee,            
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (rslt) {              

                $('#addEmployeeForm').show();

                $('#txtUserName').val(rslt.Name);
                $('#txtAddress').val(rslt.Address);
                $('#txtPhone').val(rslt.PhoneNumber);
                $('#txtPosition').val(rslt.Position);                
            }
        });        
    });
});

