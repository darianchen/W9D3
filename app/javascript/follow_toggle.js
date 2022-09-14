import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    toggleButton.addEventListener('click', this.handleClick.bind(this));
    this.toggleButton = toggleButton
  }

  async handleClick(event) {
    event.preventDefault();
    if (this.followState){
      this.unfollow();
    }else{
      this.follow();
    }
  }

  async follow() {
    
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    console.log(this.toggleButton.dataset.followState)
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}