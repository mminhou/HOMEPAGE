from rest_framework import serializers
from accounts.models import User
from .posts_models import Posts, Comment
from category.category_models import Category
from override.slug import SlugRelatedModuleField

class Base64FileField(serializers.FileField):
    """
    A Django REST framework field for handling image-uploads through raw post data.
    It uses base64 for encoding and decoding the contents of the file.

    Heavily based on
    https://github.com/tomchristie/django-rest-framework/pull/1268

    Updated for Django REST framework 3.
    """

    def to_internal_value(self, data):
        from django.core.files.base import ContentFile
        import base64
        from django.utils import six
        import uuid

        # Check if this is a base64 string
        if isinstance(data, six.string_types):
            # Check if the base64 string is in the "data:" format
            if 'data:' in data and ';base64,' in data:
                # Break out the header from the base64 content
                header, data = data.split(';base64,')
                extension = header.split('/')

            # Try to decode the file. Return validation error if it fails.
            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_file')

            # Generate file name:
            file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
            # Get the file name extension:
            file_extension = extension[1]
            if file_extension == 'vnd.openxmlformats-officedocument.presentationml.presentation':
                file_extension = 'pptx'
            elif file_extension == 'vnd.openxmlformats-officedocument.wordprocessingml.document':
                file_extension = 'docx'
            elif file_extension == 'vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                file_extension = 'xlsx'

            complete_file_name = "%s.%s" % (file_name, file_extension, )

            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64FileField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension == "pdf"

        return extension


class PostsSerializer(serializers.ModelSerializer):
    user = SlugRelatedModuleField(
        queryset=User.objects.all(),
        slug_field='nickname'
    )
    category = SlugRelatedModuleField(
        queryset=Category.objects.all(),
        slug_field='title'
    )
    # file = Base64FileField(required=False)
    file = serializers.FileField(required=False)

    class Meta:
        model = Posts
        fields = ('id', 'category', 'user', 'title', 'content', 'created', 'file')


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    comment = serializers.CharField(required=True)
    user = SlugRelatedModuleField(
        queryset=User.objects.all(),
        slug_field='nickname'
    )

    class Meta:
        model = Comment
        fields = ('user', 'post', 'comment')

    def create(self, validated_data):
        comment = Comment.objects.create(**validated_data)
        return comment

