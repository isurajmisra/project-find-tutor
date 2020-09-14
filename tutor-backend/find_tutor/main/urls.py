# from django.conf.urls import url
from django.urls import path, include
# from rest_framework import routers
from . import views

# router = routers.DefaultRouter()
# router.register(r'heroes', views.HeroViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    # path('/',views.)
    path('users/', views.UsersListView.as_view(), name='users'),
    path('users/<int:id>/', views.UserDetailView.as_view()),
]