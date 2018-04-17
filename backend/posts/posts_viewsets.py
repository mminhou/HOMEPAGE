from rest_framework import viewsets
import django_filters.rest_framework
from .posts_models import Posts
from .posts_serializers import PostsSerializer

class PostsViewSet(viewsets.ModelViewSet):
    filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filter_fields = ('category', )
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
