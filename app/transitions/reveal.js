import { Promise } from "liquid-fire";

export default function reveal(dimension, direction, opts) {
  if (this.newElement) {
    this.newElement.css({visibility: ''});
  }
  return Promise.resolve();
}
