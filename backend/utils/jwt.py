from accounts.serializers import UserSerializer

'''
    Simply, Override to return a custom response such as including the serialized representation of the User.
    previous http://localhost:8000/api-tokne-auth/ -> Only return 'token' (Default)
    jwt_response_payload_handler is possible return 'token' & 'user' Model as resulting http://localhost:8000/api-tokne-auth/
    update settings.py after define jwt_response_payload_handler function  
'''
def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }
