import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, NgChartsModule, ChartsRoutingModule, PageHeaderModule],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
