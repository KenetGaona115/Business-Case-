from rest_framework import viewsets
from .models import Product, Auth
from .serializer import ProductSerializer, AuthSerializer
from django.shortcuts import render

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class AuthViewSet(viewsets.ModelViewSet):
    queryset = Auth.objects.all()
    serializer_class = AuthSerializer
    
def redirect(request):
    target_url = 'http://localhost:4200/home'
    return render(request, {'target_url': target_url})