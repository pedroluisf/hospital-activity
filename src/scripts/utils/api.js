define([], function() {

    var getPatients = function() {
        return $.getJSON("../mock-api-data/patients.json");
    };

    var getPatientsSummary = function(id) {
        return $.getJSON("../mock-api-data/patients/" + id + "/summary.json");
    };

    var getActivitiesDefinition = function(callback) {
        jQuery.ajax({
            url: "../mock-api-data/definitions/activities.json",
            success: callback,
            async: false
        });
    };

    return {
        getPatients: getPatients,
        getPatientsSummary: getPatientsSummary,
        getActivitiesDefinition: getActivitiesDefinition
    }
});


