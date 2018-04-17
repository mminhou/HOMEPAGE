from django.contrib import admin

from accounts.models import User
from category.category_models import Category
from posts.posts_models import Posts

admin.site.register(User)
admin.site.register(Category)
admin.site.register(Posts)