import {Injectable,NgModule} from '@angular/core';
import{IShContextOptions,ShContextDefaultOptions} from "./sh-context-menu.models";
import {InjectionService} from './injector.service';

@Injectable(
    {
        providedIn: 'root'  // <- ADD THIS
    }
)
export class ShContextService {
    options: IShContextOptions;

    setOptions(opts: IShContextOptions):IShContextOptions{
        this.options = Object.assign({},ShContextDefaultOptions,opts);
        return this.options;
    }
    getOptions():IShContextOptions {
         return this.options;
    }
}

@NgModule({
    providers: [ShContextService, InjectionService]
})
    export class ShContextServiceModule {}