from django.urls import path 
from . import views 

urlpatterns = [ 
	path('', views.home, name="home"), 
    path('heart/', views.heart, name="heart"), 
    path('explain/', views.explain, name='explain'),
] 
