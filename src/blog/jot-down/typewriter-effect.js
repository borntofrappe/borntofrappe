import { browser } from "$app/environment";

if (browser && customElements && !customElements.get("typewriter-effect")) {
  class TypewriterEffect extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.requestID = -1;
      this.timeoutID = -1;

      const separator = this.getAttribute("separator") || ".";
      const rate = +(this.getAttribute("rate") || 5);
      const delay = +(this.getAttribute("delay") || 3000);

      let text = /** @type { string } */ (this.textContent);
      text.trim();
      if (this.hasAttribute("lines")) {
        text += `${separator}${this.getAttribute("lines")}`;
      }

      const textContents = text.split(separator);
      let index = 0;
      let textContent = textContents[index];
      let threshold = textContent.length * rate;

      let direction = -1;
      let counter = direction === 1 ? 0 : threshold;

      const animate = () => {
        counter += direction;
        const i = Math.floor((counter / threshold) * textContent.length);
        this.textContent = textContent.slice(0, i);
        if (counter === 0 || counter === threshold) {
          direction *= -1;
          if (direction === 1) {
            index = (index + 1) % textContents.length;
            textContent = textContents[index];
            threshold = textContent.length * rate;
            this.requestID = requestAnimationFrame(animate);
          } else {
            if (this.requestID) {
              cancelAnimationFrame(this.requestID);
            }
            this.timeoutID = setTimeout(() => {
              this.requestID = requestAnimationFrame(animate);
            }, delay);
          }
        } else {
          this.requestID = requestAnimationFrame(animate);
        }
      };

      this.timeoutID = setTimeout(() => {
        this.requestID = requestAnimationFrame(animate);
      }, delay);
    }

    disconnectedCallback() {
      if (this.requestID) {
        cancelAnimationFrame(this.requestID);
      }
      clearTimeout(this.timeoutID);
    }
  }

  customElements.define("typewriter-effect", TypewriterEffect);
}
