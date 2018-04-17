"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from .admin import admin

from django.urls import path

from django.conf.urls.static import static
from django.conf import settings

from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token

# Viewsets
from accounts.views import UserViewSet
from category.category_viewsets import CategoryViewSet
from posts.posts_viewsets import PostsViewSet


router = routers.DefaultRouter()
router.register(r'accounts', UserViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'posts', PostsViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    # Token authentication -> curl -X POST -d "login_id=....&password=...." http://127.0.0.1:8000/api-token-auth/
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
