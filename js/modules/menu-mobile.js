import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuList, button, events) {
    this.menuList = document.querySelector(menuList);
    this.menuButton = document.querySelector(button);
    this.activeClass = 'active';

    // define touchstart e click como argumento padrão
    // de events caso o usuario nao defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuMobileEvent();
    return this;
  }
}
