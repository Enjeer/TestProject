// ThemeView is responsible for switching UI theme
export class ThemeView {
    constructor(root) {
        this.root = root
        this.themeBtn = root.querySelector('#themeBtn');

        if (!this.root, !this.themeBtn) {
            console.error('ThemeView elements not found!');
        }
    }

    bindToggleTheme(handler){
        this.themeBtn.addEventListener('click', ()=>{
            handler();
        })
    }
    
    themeChange(theme) {
        const items = Array.from(this.root.querySelectorAll('[data-theme]'));
        if (this.root.hasAttribute('data-theme')) {
            items.push(this.root);
        }
        
        items.forEach(el => {
            el.setAttribute('data-theme', theme);
        });
    }
}