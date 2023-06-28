import {Component, inject} from '@angular/core';
import {LicensePlateService} from '../license-plate.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent {

  private service = inject(LicensePlateService);
  plates$ = this.service.getList();
}
