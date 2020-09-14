from rest_framework.response import Response
from main.serializers import UserSerializer, UserDetailSerializer
from main.models import User
from rest_framework import generics


from rest_framework import permissions


class UsersListView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        if request.user.is_superuser:
            users = User.objects.all()
            data = []
            for user in users:
                data.append(
                    {'id': user.id, 'username': user.username, 'Name': user.get_full_name(), 'email': user.email,
                     'mobile': user.mobile, 'Age': user.age, 'is_student': user.is_student})
            return Response({'data': data})

        else:
            user = generics.get_object_or_404(User, id=request.user.id)
            data = {'id': user.id, 'username': user.username, 'Name': user.get_full_name(), 'email': user.email,
                    'mobile': user.mobile, 'Age': user.age, 'is_student': user.is_student}
            return Response(data)
        return Response({'result': 'You are not authorized to see the result.'}, status=401)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            if serializer.validated_data['encrypted_password'] == serializer.validated_data['smtp_password']:
                serializer.validated_data.pop('smtp_password', None)
                user = serializer.save()
                user.set_password(serializer.validated_data['encrypted_password'])
                user.save()
                return Response(serializer.data, status=201)
            else:
                return Response({'result': 'Both password should match.'})

        return Response(serializer.errors, status=400)


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, id=None):
        user = User.objects.filter(id=id).last()
        if request.user.is_superuser or request.user == user:
            data = {'id': user.id, 'username': user.username, 'Name': user.get_full_name(), 'email': user.email,
                    'mobile': user.mobile, 'Age': user.age, 'is_student': user.is_student}
            return Response(data)
        return Response({'result': 'You are not authorized to see the result.'}, status=401)

    def put(self, request, id=None):
        user = User.objects.filter(id=id).last()
        if request.user.is_superuser or request.user == user:
            serializer = UserSerializer(user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        return Response({'result': 'You are not authorized to see the result.'}, status=401)

    def delete(self, request, id=None):
        user = User.objects.filter(id=id).last()
        if request.user.is_superuser or request.user == user:
            user.delete()
            return Response(status=204)
        return Response({'result': 'You are not authorized to see the result.'}, status=401)