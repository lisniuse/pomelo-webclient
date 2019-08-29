import $Pemelo from "./src/Pemelo";

class Pemelo {
  constructor() {
    this.pemelo = new $Pemelo();
  }

  init(params) {
    return new Promise((resolve, reject) => {
      this.pemelo.init(params, function(data) {
        resolve(data);
      }, function(e) {
        reject(e)
      });
    });
  }

  request(route, msg) {
    return new Promise((resolve, reject) => {
      this.pemelo.request(route, msg, function(data) {
        resolve(data);
      });
    });
  }
}

export default Pemelo;
