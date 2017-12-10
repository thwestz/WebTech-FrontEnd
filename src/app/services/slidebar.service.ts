import { EventEmitter, Injectable } from "@angular/core";
import { Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SlidebarService {
    isOpen: boolean = false;
    toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

    onClick() {
        this.isOpen = !this.isOpen;
        this.toggle.emit(this.isOpen);
    }

    onClose(){
        this.isOpen = false;
        this.toggle.emit(this.isOpen);
    }

}