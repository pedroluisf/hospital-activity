define([
    'utils/api',
    'models/Patient'
], function(api, Patient){

    var initGrid = function() {
        var promise = api.getPatients();
        promise.done(function(data) {

            var items = [];
            for (var i = 0; i < data.length; i++) {
                items.push(Patient(data[i]));
            }

            $("#patientsGrid").jsGrid({
                width: "100%",
                height: "500px",

                editing: false,
                sorting: true,
                paging: true,

                pageSize: 10,
                pageButtonCount: 5,

                data: items,

                fields: [
                    { name: "name", title: "Name", type: "text", width: 150 },
                    { name: "gender", title: "Gender", type: "text", width: 20 },
                    { name: "birthDate", title: "Birth Date", type: "text", width: 50 },
                    { name: "heightCm", title: "Height Cm", type: "number", width: 20 },
                    { name: "weightKg", title: "Weight Kg", type: "number", width: 20 },
                    { name: "bmi", title: "BMI", type: "number", width: 20 },
                    { name: "action", title: "Summary", width: 50, align: "center",
                        itemTemplate: function(value, item) {

                            return $("<button>").attr("type", "button").addClass("btn btn-primary").text("View")
                                .on("click", function () {
                                    showInfo(item);
                                });
                        }
                    }
                ]
            });

            $("#spinner").hide();
        })
        .fail(function() {
            console.log("error loading patients");
        });
    };

    var showInfo = function(patient) {
        $("#name").html(patient.name);
        $("#none").html(patient.summary.none || 0);
        $("#low").html(patient.summary.low || 0);
        $("#moderate").html(patient.summary.moderate || 0);
        $("#vigorous").html(patient.summary.vigorous || 0);
        $("#patientModal").modal();
    };

    return {
        initGrid: initGrid
    }

});

