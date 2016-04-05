'use strict';

angular.module('meanFullstackApp.auth', [
  'meanFullstackApp.constants',
  'meanFullstackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
