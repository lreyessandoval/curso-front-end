<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group text-center">
                <h1 class="display-1" for="new-task">{{time}}</h1>
              </div>
            </form>
          </div>
          <div class="card-footer text-center">
            <button
              class="btn btn-primary mr-3"
              v-for="item in buttons"
              :key="item.id"
              v-on:click="initCountDown(item.time)"
            >{{item.time}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDown",
  props: {
    title: String,
  },
  data() {
    return {
      time: "00:00 min/seg",
      timeleft: 1,
      datetimeleft: new Date(),
      buttons: [
        { id: 1, time: "3s" },
        { id: 2, time: "1m" },
        { id: 3, time: "5m" },
        { id: 4, time: "10m" },
        { id: 5, time: "30m" },
      ],
    };
  },
  methods: {
    initCountDown: function (time) {
      var value = parseInt(time);

      if (time.includes("m")) {
        this.datetimeleft = new Date();
        this.datetimeleft.setMinutes(this.datetimeleft.getMinutes() + value);
      }
      if (time.includes("s")) {
        this.datetimeleft = new Date();
        this.datetimeleft.setSeconds(this.datetimeleft.getSeconds() + value);
      }

      this.countDownTimer();
    },
    countDownTimer() {
      if (this.timeleft > 0) {
        setTimeout(() => {
          var date = new Date();

          if (date <= this.datetimeleft) {
            /* calc time */
            const diffTime = Math.abs(date - this.datetimeleft);
            var diffSec = Math.ceil(diffTime / 1000);
            this.timeleft = diffSec;

            var diffMin = Math.trunc(diffSec / 60);
            diffSec = diffSec - diffMin * 60;

            this.time =
              this.zeroFill(diffMin, 2) +
              ":" +
              this.zeroFill(diffSec, 2) +
              " min/seg";
            this.countDownTimer();
          } else {
            this.time = "00:00 min/seg";
          }
        }, 1000);
      }
    },
    zeroFill(number, width) {
      var numberOutput = Math.abs(number); /* Valor absoluto del número */
      var length = number.toString().length; /* Largo del número */
      var zero = "0"; /* String de cero */

      if (width <= length) {
        if (number < 0) {
          return "-" + numberOutput.toString();
        } else {
          return numberOutput.toString();
        }
      } else {
        if (number < 0) {
          return "-" + zero.repeat(width - length) + numberOutput.toString();
        } else {
          return zero.repeat(width - length) + numberOutput.toString();
        }
      }
    },
  },
};
</script>