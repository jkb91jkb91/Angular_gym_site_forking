import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    collapsed = true;

    constructor(private dataStorageService: DataStorageService) {}

    onSaveData() {
        this.dataStorageService.storeTrainings();
    }

    onFetchData() {
        this.dataStorageService.fetchTrainings().subscribe(); 
    }
}