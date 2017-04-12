define([
    'utils/api',
    './Activity'
], function(api, Activity){

    var Patient = function(config) {
        return new Patient.init(config);
    };

    Patient.prototype = {
        getSummary: function() {
            return this.summary;
        },
        getRecommendedExercise: function() {

        }
    };

    Patient.init = function(config) {
        this.id = config.id;
        this.name = config.name;
        this.gender = config.gender;
        this.birthDate = config.birthDate;
        this.heightCm = config.heightCm;
        this.weightKg = config.weightKg;
        this.bmi = config.bmi;
        this.summary = {};
        var self = this;

        var promise = api.getPatientsSummary(this.id);
        promise.done(function(data) {
            for (var i = 0; i < data.length; i++) {
                var intensity = Activity.getIntensity(data[i].activity);
                if (intensity in self.summary) {
                    self.summary[intensity] += data[i].minutes;
                } else {
                    self.summary[intensity] = data[i].minutes;
                }
            }
        })
        .fail(function() {
            console.log("error loading patient's summary");
        });
    };

    Patient.init.prototype = Patient.prototype;

    return Patient;

});
