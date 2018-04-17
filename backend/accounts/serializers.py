from rest_framework import serializers
from .models import User
from posts.posts_models import Posts
from override.pkRelatedField import MyPrimaryKeyRelatedField

class UserSerializer(serializers.ModelSerializer):
    Posts = MyPrimaryKeyRelatedField(many=True, queryset=Posts.objects.all(), required=False)
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)

    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'first_name', 'last_name', 'nickname', 'date_joined', 'Posts')


