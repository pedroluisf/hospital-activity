## Single patient overview

> "Currently we have an overview of all the patients, we would like a more detailed view of a single patient. This view should show us what activities the patient has done today and what they should do tomorrow."

Add the following functionality:

1. An overview of an individual patient's activity.
2. Recommended exercise for the next day for each patient.

### Recommendations

| Category                              | BMI FROM | BMI TO |
| ------------------------------------- | -------- | ------ |
| Normal (healthy weight)               | 18.5     | 25     |
| Overweight                            | 25       | 30     |
| Obese Class I (Moderately obese)      | 30       | 35     |
| Obese Class II (Severely obese)       | 35       | 40     |
| Obese Class III (Very severely obese) | 40       |        |

The recommended ratio of exercise for a person of healthy weight is 60% vigorous and 40% moderate exercise.
For each class of BMI the amount of vigorous exercise should be reduced by 15%.

Recommendations should take into account patient preference. For example, don't recommend cycling to non-cyclists. If the patient has no preference then walking or running should be recommended as they have the least pre-requisites.
