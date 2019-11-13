import { Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','skyblue')
   }



changeBg(color:string){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color)
  }



  @HostListener('click') myClick(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue')

  }

  @HostListener('mouseover') myMouseOver(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','gray')

  }

  @HostListener('mouseout') myMouseOut(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','white')

  }
}
