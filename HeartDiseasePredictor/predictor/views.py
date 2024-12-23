from django.shortcuts import render
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from predictor.forms import HeartDiseaseForm



def heart(request):

    df = pd.read_csv('static/Heart_train.csv')
    X = df.iloc[:, :-1].values 
    Y = df.iloc[:, -1].values 





    """ Notes: 
        Request: Handles the user inputs
        Dataset: Basically df is a variable in which I am assigning the csv files 
        that is being loaded into a data frame by the function pd.read_csv()

        X is equal to all rows of all the columns minus the last one
        Y is equal to all the rows of the last column 

        So the model that I am using uses the two divided data sets to: 
        - used to make predictions 
        - and is trained to predict
            - in this case, the data set in X is being used to predict the outcome in Y 
            (if the person has heart disease)

    """ 

    prediction_result = None 


    if request.method == 'POST':

        """ Notes:
            Basically an if statement checking if the user submits the form
            Then if the form is valid meaning all the fields are filled, 
            user_data is assigned to all the data taken from the user input and turned into a numpy array 
        """

        form = HeartDiseaseForm(request.POST)


        if form.is_valid():
            user_data = np.array([[
                form.cleaned_data['age'],
                form.cleaned_data['sex'],
                form.cleaned_data['cp'],
                form.cleaned_data['trestbps'],
                form.cleaned_data['chol'],
                form.cleaned_data['fbs'],
                form.cleaned_data['restecg'],
                form.cleaned_data['thalach'],
                form.cleaned_data['exang'],
                form.cleaned_data['oldpeak'],
                form.cleaned_data['slope'],
                form.cleaned_data['ca'],
                form.cleaned_data['thal']
            ]])

            




            """ Notes: 
                Random Forest Classifier is a type of machine learning model that is used to combine multiple 
                decision trees (splits data into 2 based on conditions) to make the accuracy more predictable
                n_estimator is how many decision trees there will be
                max_dept is how far each tree is going to expand
            """

            rf = RandomForestClassifier(
                n_estimators=16,
                criterion='entropy',
                max_depth=9
            )


            """ This is where u train the model by using the fit() method to take in the X and Y data """



            rf.fit(X, Y)  
            prediction = rf.predict(user_data)

            print("Prediction:", prediction)
            prediction_result = "You have heart disease" if prediction[0] == 1 else "You do not have heart disease"



    else:
        form = HeartDiseaseForm()


    return render(request, 'heart.html', {
        'form': form,
        'prediction_result': prediction_result,
    })


def home(request):
    return render(request, 'home.html')


def explain(request):
    return render(request, 'explain.html')
