define([
    'utils/api'
], function(api){

    var activitiesList = {};

    var init = function(){
        api.getActivitiesDefinition(function(data) {
            for (var i = 0; i < data.length; i++) {
                activitiesList[data[i].activity] = data[i].intensity;
            }
        });
    };

    var getIntensity = function(activity){
        if (!activitiesList.length) {
            init();
        }
        return activitiesList[activity];
    };

    return {
        getIntensity: getIntensity
    };
    
});
