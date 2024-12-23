from django import forms

class HeartDiseaseForm(forms.Form):
    age = forms.FloatField(label='Age', required=True)
    sex = forms.ChoiceField(
        label='Sex',
        choices=[(1, 'Male'), (0, 'Female')],
        widget=forms.RadioSelect,
    )
    cp = forms.FloatField(label='Chest Pain Type (CP)', required=True)
    trestbps = forms.FloatField(label='Resting Blood Pressure (mmHg)', required=True)
    chol = forms.FloatField(label='Serum Cholesterol (mg/dL)', required=True)
    fbs = forms.ChoiceField(
        label='Fasting Blood Sugar',
        choices=[(1, 'True'), (0, 'False')],
        widget=forms.RadioSelect,
    )
    restecg = forms.FloatField(label='Resting ECG', required=True)
    thalach = forms.FloatField(label='Max Heart Rate Achieved', required=True)
    exang = forms.ChoiceField(
        label='Exercise Induced Angina',
        choices=[(1, 'Yes'), (0, 'No')],
        widget=forms.RadioSelect,
    )
    oldpeak = forms.FloatField(label='ST Depression', required=True)
    slope = forms.FloatField(label='Slope', required=True)
    ca = forms.FloatField(label='Number of Major Vessels (CA)', required=True)
    thal = forms.FloatField(label='Thalassemia (Thal)', required=True)

