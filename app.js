new Vue({
   el: ".stock",
   data: {
      number: 0
   },
   methods: {
      increase: function () {
         this.number = this.number + 1;
         console.log(this.number);
      },
      decrease: function () {
         if (this.number <= 1) {
            this.number = 1;
         }
         this.number = this.number - 1;
         console.log(this.number);
      }
   }
});

