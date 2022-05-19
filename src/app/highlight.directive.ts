import { Directive, Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
    @Input() filterWords: string = '';
    @Input() content: string = '';

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges): void {        

        if (!this.filterWords || !this.filterWords.length) {
            this.renderer.setProperty(this.element.nativeElement, 'innerHTML', this.content);
            return;
        }

        this.renderer.setProperty(
            this.element.nativeElement,
            'innerHTML',
            this.getHighlightedText()
        );
    }

    getHighlightedText() {

        const filterWordsArray = this.filterWords.split(' ');
        
        const filterWordRegEx = new RegExp(`${filterWordsArray.join('|')}`, 'gi');
        return this.content.replace(filterWordRegEx, regEx => `<span style="background-color: yellow">${regEx}</span>`);
    }

}