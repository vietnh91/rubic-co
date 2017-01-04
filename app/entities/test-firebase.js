var config = {
            apiKey: "AIzaSyDKun-G5GzLMoaLDAEnRqYH4X1xBuLmhrE",
            authDomain: "rubic-co.firebaseapp.com",
            databaseURL: "https://rubic-co.firebaseio.com",
            storageBucket: "rubic-co.appspot.com",
            messagingSenderId: "471694731914"
          };
          firebase.initializeApp(config);

          var subscriber = {
              id: 1,
              name: 'vietnh'
          };

          //$scope.send = function() {
              var newSubscriberKey = firebase.database().ref().child('subscriber').push().key;

              // Write the new post's data simultaneously in the posts list and the user's post list.
              var updates = {};
              updates['/subscriber/' + newSubscriberKey] = subscriber;

              firebase.database().ref().update(updates);
              console.log(subscriber);
          //}