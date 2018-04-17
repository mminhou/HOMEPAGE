from rest_framework import serializers
from .category_models import Category
from posts.posts_models import Posts



class CategorySerializer(serializers.ModelSerializer):
    Posts = serializers.PrimaryKeyRelatedField(many=True, queryset=Posts.objects.all(), required=False)
    class Meta:
        model = Category
        fields = ('id', 'title', 'Posts')
