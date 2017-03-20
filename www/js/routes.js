angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.cashlessIndia', {
    url: '/ci',
    views: {
      'tab2': {
        templateUrl: 'templates/cashlessIndia.html',
        controller: 'cashlessIndiaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.aboutUs'
      2) Using $state.go programatically:
        $state.go('tabsController.aboutUs');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/au
      /page1/tab3/au
  */
  .state('tabsController.aboutUs', {
    url: '/au',
    views: {
      'tab2': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.nUUP99', {
    url: '/nuup',
    views: {
      'tab2': {
        templateUrl: 'templates/nUUP99.html',
        controller: 'nUUP99Ctrl'
      }
    }
  })

  .state('tabsController.uPI', {
    url: '/upi',
    views: {
      'tab2': {
        templateUrl: 'templates/uPI.html',
        controller: 'uPICtrl'
      }
    }
  })

  .state('tabsController.eWallet', {
    url: '/ewallet',
    views: {
      'tab2': {
        templateUrl: 'templates/eWallet.html',
        controller: 'eWalletCtrl'
      }
    }
  })

  .state('tabsController.aadhaar', {
    url: '/aadhaar',
    views: {
      'tab2': {
        templateUrl: 'templates/aadhaar.html',
        controller: 'aadhaarCtrl'
      }
    }
  })

  .state('tabsController.cardPoS', {
    url: '/cardspos',
    views: {
      'tab2': {
        templateUrl: 'templates/cardPoS.html',
        controller: 'cardPoSCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/ci')

  

});