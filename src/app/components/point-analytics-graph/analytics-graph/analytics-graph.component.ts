import { Component, OnInit } from '@angular/core';
import * as highchartsData from '../../../shared/data/analytics.highchartsData';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-analytics-graph',
  templateUrl: './analytics-graph.component.html',
  styleUrls: ['./analytics-graph.component.scss']
})
export class AnalyticsGraphComponent implements OnInit {
  dropdownList = [];
  dropdownSettings:IDropdownSettings={};
  staffForm: FormGroup;
  requiredField: boolean ;

  constructor(private staffBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.createForm();
    this.dropdownList = [
      { item_id: 1, item_text: 'Today' },
      { item_id: 2, item_text: 'Yesterday' },
      { item_id: 3, item_text: '30 Days' },
      { item_id: 4, item_text: '90 Days' },
      { item_id: 5, item_text: '01 Year' }
    ]

    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      singleSelection: true,
      enableCheckAll: false,
    };
  }

  createForm(): void {
    this.staffForm = this.staffBuilder.group({
      area: [''],
    });
  }

  setStatus() {
    (this.staffForm.controls['area'].value.length > 0) ? this.requiredField = true : this.requiredField = false;
  }

  onItemSelect(item: any) {
    this.setClass();
  }
  onSelectAll(items: any) {
    (items.length > 0) ? this.requiredField = true : this.requiredField = false;
  }

  setClass() {
    this.setStatus();
    if (this.staffForm.controls['area'].value.length > 0) { return 'validField' }
    else { return 'invalidField' }
  }

  // Chart 1
  public Highcharts1 = highchartsData.Highcharts1;
  public chartOptions1 = highchartsData.chartOptions1;

}
