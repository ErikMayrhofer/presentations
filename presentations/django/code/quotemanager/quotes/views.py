from django.shortcuts import render
from rest_framework import viewsets

from .models import Quote, Person
from .serializers import QuoteSerializer, PersonSerializer


class QuoteView(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer


class PersonView(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
