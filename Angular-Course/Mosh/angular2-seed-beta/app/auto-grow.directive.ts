import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)' : 'onBlur()'
    }
})

export class AutoGrowDirective {
    constructor(private e: ElementRef, private r: Renderer){ }
    onFocus() { 
        this.r.setElementStyle(this.e.nativeElement, 'width', '200');
    }
    onBlur() {
        this.r.setElementStyle(this.e.nativeElement, 'width', '120');
    }
}