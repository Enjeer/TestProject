// ThemeModel handles logic for theme switching
export class ThemeModel {
    constructor(storageService) {
            this.storageKey = 'theme';
            this.theme = localStorage.getItem(this.storageKey) || 'light';
        }

        getTheme() {
            return this.theme;
        }

        toggle(theme) {
            this.theme = theme == 'dark' ? 'light' : 'dark';
            localStorage.setItem(this.storageKey, this.theme);
            return this.theme;
        }
}
