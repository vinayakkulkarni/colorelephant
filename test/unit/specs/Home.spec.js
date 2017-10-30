import Vue from 'vue';
import Home from '@/components/Home';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hero .container h1').textContent)
      .to.equal('WE’RE IN THE BUSINESS OF HELPING BUSINESSES');
  });
});
