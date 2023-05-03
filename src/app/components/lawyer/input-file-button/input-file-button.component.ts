import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-file-button',
  templateUrl: './input-file-button.component.html',
  styleUrls: ['./input-file-button.component.scss']
})
export class InputFileButtonComponent implements OnInit {

  @ViewChild('fileName') fileName: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;

  fileAdded: boolean = false;
  inputFile: File;
  
  @Input("emptyInputString") emptyInputString: string = '';
	@Input("subString") subString: string = ': ';
	@Input("dataAggiornamento") dataAggiornamento: string = '';
  @Input("idInput") idInput: string = '';

	@Output('fileSelected') fileSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleInputChange(event){
    this.fileAdded = true; 
    const inputFile = event.target.files[0];
    this.fileName.nativeElement.innerHTML = inputFile.name;
  }

  handleInputClick(){
    if(this.fileName.nativeElement.innerHTML === this.emptyInputString){
      this.fileAdded = false;
    }
  }

  handleInputCancel(ev){
    this.fileInput.nativeElement.value='';
    this.fileName.nativeElement.innerHTML= this.emptyInputString;
    
    //this prevevent the re-opening of the select-file dialog
    ev.preventDefault(); 
    this.fileAdded = false;

    // reset input
		this.inputFile = null;
		this.fileSelected.emit(null);
  }

}