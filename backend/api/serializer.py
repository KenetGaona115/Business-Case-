from rest_framework import serializers
from .models import Product,Auth

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # fields = ('name', 'desc', 'pricing', )
        fields = '__all__'
        
class AuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auth
        # fields = ('name', 'desc', 'pricing', )
        fields = '__all__'