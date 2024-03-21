from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'auth',views.AuthViewSet)
# router.register(r'redirect',views.redirect)

urlpatterns = [
    path('', include(router.urls)),
    path('redirect', views.redirect, name='home')
]