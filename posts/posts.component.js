(function () {
  angular.module('app')
    .component('posts', {
      controller: function postsController() {
        const vm = this;

        vm.posts = [];
        vm.post = {};

        vm.$onInit = function onInit() {
          vm.posts.push({
            id: 0,
            title: 'Darmok',
            author: 'Jalad',
            body: 'Picard is captured, then trapped on a planet with an alien captain who speaks a metaphorical language incompatible with the universal translator. They must learn to communicate with each other before a deadly planetary beast overwhelms them.',
            imageURL: 'https://vignette3.wikia.nocookie.net/memoryalpha/images/0/04/5x02_Darmok_title_card.jpg/revision/latest/scale-to-width-down/350?cb=20160711014651&path-prefix=en',
            date: new Date(),
            votes: 0,
          });
          vm.posts.push({
            id: 1,
            title: 'Current Feels',
            author: 'gudetama',
            body: 'Please send help, thx.',
            imageURL: 'http://data.whicdn.com/images/167559368/superthumb.jpg',
            date: new Date(),
            votes: 0,
          });
        };

        vm.addPost = function addPost() {
          if (!vm.post.body || !vm.post.title || !vm.post.author || !vm.post.imageURL) {
            console.error('Missing stuff!');
            return;
          }
          vm.post.id = vm.posts.length;
          vm.post.date = new Date();
          vm.post.votes = 0;
          vm.posts.push(vm.post);
          vm.post = {};
        };

        vm.upvote = function upvote(postID) {
          vm.posts[postID].votes++;
          // vm.post.votes++;
        };

        vm.downvote = function downvote(postID) {
          if (vm.posts[postID].votes > 0) {
            vm.posts[postID].votes--;
          }
        };

        vm.dateDisplay = function dateDisplay(timestamp) {
          const now = new Date();
          const secondsPast = parseInt((now.getTime() - timestamp) / 1000);

          if (secondsPast < 60) {
            // return `${secondsPast} second${(secondsPast !== 1) ? 's' : ''}`;
            return 'a few seconds ago';
          }
          if (secondsPast < 3600) {
            const minutesPast = parseInt(secondsPast / 60);
            return `${minutesPast} minute${(minutesPast !== 1) ? 's' : ''} ago`;
          }
          if (secondsPast <= 86400) {
            const hoursPast = parseInt(secondsPast / 3600);
            return `${hoursPast} hours${(hoursPast !== 1) ? 's' : ''} ago`;
          }
          // if (secondsPast > 86400) {
          const day = timestamp.getDate();
          const month = timestamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(' ', '');
          const year = timestamp.getFullYear() === now.getFullYear() ? '' : ` ${timestamp.getFullYear()}`;
          return `${month} ${day}, ${year}`;
        //  }
        };
      },
      templateUrl: '/posts/posts.template.html',
    });
}());
