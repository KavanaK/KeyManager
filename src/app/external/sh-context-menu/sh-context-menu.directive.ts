import {ShContextService} from './sh-context-service';
import {Directive,Input,HostListener,ComponentRef,Output,EventEmitter} from '@angular/core';
import {BeforeMenuEvent, IShContextMenuItem, IShContextOptions} from './sh-context-menu.models';
import { ShContextMenuComponent } from './sh-context-menu.component';
import {InjectionService} from './injector.service';
import{ShContextOverlayComponent} from './sh-context-overlay.component';
@Directive({
    selector: '[sh-context]'
})

export class ShContextMenuDirective{
    @Input('sh-context') menuItems: IShContextMenuItem[];
    @Input('sh-data-context') dataContext: any;
    @Input('sh-options') options: IShContextOptions;

    @Output('onBeforeMenuOpen') onBeforeMenuOpen = new EventEmitter<BeforeMenuEvent>();
    ctxComponent: ComponentRef<ShContextMenuComponent>;
    overlayComponent: ComponentRef<ShContextOverlayComponent>;

    constructor(private ctxService: ShContextService,private injectionService: InjectionService){}

    @HostListener('window:scroll',[])
    onWindowScroll() {
        this.CloseMenu();
    }
    // context menu open handler

    @HostListener('contextmenu',['$event'])
    onClick(event: MouseEvent){
        this.options = this.ctxService.setOptions(this.options);
        this.CloseMenu();

        if (this.contextMenuIsEmpty()){
            return;
        }
        if (this.onBeforeMenuOpen.observers.length>0){
            this.onBeforeMenuOpen.emit({
                event: event,
                items: this.menuItems,
                open: (modifieditems:IShContextMenuItem[]=this.menuItems) => this.createMenu(event, modifieditems)
            });
        } else{
            this.createMenu(event);
        }
        return false;
    }
    private createMenu(event: MouseEvent,items: IShContextMenuItem[]=this.menuItems){
        this.overlayComponent = this.createOverlayComponent();
        this.ctxComponent = this.createContextComponent();

        this.registerBindings(items);
        this.registerEvents();
        this.setLocation(event);
    }
    registerEvents(){
        this.ctxComponent.instance.onClose.subscribe(() => {
            this. CloseMenu();
        });
        this.overlayComponent.instance.onClick.subscribe(() =>{
            this. CloseMenu();
        });

    }
    registerBindings(menuItems:IShContextMenuItem[]){
        this.ctxComponent.instance.items = menuItems;
        this.ctxComponent.instance.dataContext = this.dataContext;
    }
    createContextComponent(): ComponentRef<ShContextMenuComponent>{
        return this.injectionService.appendComponent(ShContextMenuComponent);
    } 
    createOverlayComponent():ComponentRef<ShContextOverlayComponent>{
        return this.injectionService.appendComponent(ShContextOverlayComponent);
    }
    setLocation(event: MouseEvent){
        let {clientX,clientY} = event;
       const {innerWidth,innerHeight} = window;
       let leftPosition = 0,topPosition = 0;
       if((innerWidth - clientX) < 200) {
           leftPosition = innerWidth-200;
       }else{
           leftPosition=clientX;
       }

       if((innerHeight - clientY)<225){
           topPosition = innerHeight - 300;
       }else {
           topPosition = clientY;
       }
       this.ctxComponent.instance.position={
           top: topPosition,
           left: leftPosition
       };
    }
    CloseMenu() {
        if (this.ctxComponent){
            this.ctxComponent.destroy();
        }
        if(this.overlayComponent){
            this.overlayComponent.destroy();
        }
    }
    private contextMenuIsEmpty(): boolean {
        return !this.menuItems || this.menuItems.length === 0;
    }
}