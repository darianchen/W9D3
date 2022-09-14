import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    toggleButton.addEventListener('click', this.handleClick.bind(this));
    this.toggleButton = toggleButton
  }

  async handleClick(event) {
    event.preventDefault();
    if (this.followState !== 'followed'){
      this.follow();
    }else{
      this.unfollow();
    }
  }

  async follow() {
    console.log(this.toggleButton.dataset.userId)
    await API.followUser(this.toggleButton.dataset.userId);
    this.followState = 'followed'
  }

  async unfollow() {
    // Your code here
    console.log(this.toggleButton.dataset.userId)
    await API.followUser(this.toggleButton.dataset.userId);
    this.followState = 'unfollowed'
  }

  render() {
    switch (this.followState) {
      case "followed":
        this.toggleButton.disabled = false;
        this.toggleButton.innerText = 'Unfollow!'
        break;
      case "unfollowed":
        this.toggleButton.disabled = true;
        this.toggleButton.innerText = 'Follow!!'
        break;
      case "following":
        this.toggleButton.disabled = true;
        this.toggleButton.innerText = 'Following...'
        break;
      case "following":
        this.toggleButton.disabled = true;
        this.toggleButton.innerText = 'Unfollowing...'
        break;

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