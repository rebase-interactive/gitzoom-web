import { Promise } from "liquid-fire";

export default function() {
  if (this.newElement) {
    this.newElement.css({visibility: ''});
  }
  return Promise.resolve();
}
