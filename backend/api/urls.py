from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path(r'^api/users/(?P<pk>[0-9]+)$', views.user_detail),
    path('auth/', views.validate_google_auth),
]
