import Controller from '@ember/controller';

export default Controller.extend({
  cities: ['Barcelona', 'London', 'New York', 'Porto'],
  destination: 'London',

  actions: {
    chooseDestination(city) {
      console.log('called with city', city);
      this.set('destination', city);
    }
  }
});
