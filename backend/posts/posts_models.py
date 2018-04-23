from django.db import models
from accounts.models import User
from category.category_models import Category
from ckeditor_uploader.fields import RichTextUploadingField

class Posts(models.Model):
    user = models.ForeignKey(User, related_name="Posts", on_delete=models.CASCADE)
    category = models.ForeignKey(Category, related_name="Posts", on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = RichTextUploadingField()
    created = models.DateTimeField('date joined')
    file = models.FileField(blank=True, null=False)

    def __str__(self):
        return self.title


class Comment(models.Model):
    comment = models.CharField(max_length=300)
    post = models.ForeignKey(Posts, related_name='Comments', on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, related_name='Comments', on_delete=models.CASCADE)

