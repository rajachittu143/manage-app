import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NestedTreeControl } from "@angular/cdk/tree";
import { BehaviorSubject, Observable, of as observableOf } from "rxjs";
import { TreeData } from 'src/app/shared/components/master-category/tree-data.model';
import { TreeFunctionService } from 'src/app/shared/components/master-category/tree-function.service';
import { TreeBusinessService } from 'src/app/shared/components/master-category/tree-business.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/internal/operators/map';
import { merge } from 'rxjs/internal/observable/merge';
import { MatTable } from '@angular/material/table';
import { DialogBoxComponent } from 'src/app/shared/components/country/dialog-box/dialog-box.component';


export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Abkhazia'},
  {id: 1560608796014, name: 'Afghanistan'},
  {id: 1560608787815, name: 'Albania'},
  {id: 1560608805101, name: 'Andorra'}
];

@Component({
  selector: 'app-businesscategories',
  templateUrl: './businesscategories.component.html',
  styleUrls: ['./businesscategories.component.css']
})
export class BusinesscategoriesComponent implements OnInit {

  myForm!: FormGroup;

  
  nestedTreeControl !: NestedTreeControl<TreeData>;
  nestedDataSource !: MatTreeNestedDataSource<TreeData>;

  displayedColumns: string[] = [ 'name', 'action'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(private fb: FormBuilder,
    private dataService: TreeBusinessService,
    private service: TreeFunctionService,
    public httpClient: HttpClient,
    public dialogService: MatDialog,) { }

  ngOnInit(): void {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataService._dataChange.subscribe(
      data => (this.nestedDataSource.data = data)
    );

    // Country
    
  }

  // Business Category
  
  private _getChildren = (node: TreeData) => observableOf(node.Children);
  hasNestedChild = (_: number, nodeData: TreeData) =>
    nodeData.Children.length > 0;

  refreshTreeData() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = [];
    this.nestedDataSource.data = data;
  }

  addNode(node: any) {
    node.Id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    this.nestedDataSource.data.push(node);
    this.refreshTreeData();
  }

  addChildNode(childrenNodeData: any) {
    childrenNodeData.node.Id =
      this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    childrenNodeData.currentNode.Children.push(childrenNodeData.node);
    this.refreshTreeData();
  }

  fatherElement: any;
  editNode(nodeToBeEdited: any) {
     this.fatherElement = this.service.findFatherNode(
      nodeToBeEdited.currentNode.Id,
      this.nestedDataSource.data
    );
    let elementPosition: number;
    nodeToBeEdited.node.Id =
      this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    if (this.fatherElement[0]) {
      this.fatherElement[0].Children[this.fatherElement[1]] = nodeToBeEdited.node;
    } else {
      elementPosition = this.service.findPosition(
        nodeToBeEdited.currentNode.Id,
        this.nestedDataSource.data
      );
      this.nestedDataSource.data[elementPosition] = nodeToBeEdited.node;
    }
    this.refreshTreeData();
  }

  deletedElement:any;
  deleteNode(nodeToBeDeleted: any) {
     this.deletedElement = this.service.findFatherNode(
      nodeToBeDeleted.Id,
      this.nestedDataSource.data
    );
    let elementPosition: number;
    if (
      window.confirm(
        "Are you sure you want to delete " + nodeToBeDeleted.Name + "?"
      )
    ) {
      if (this.deletedElement[0]) {
        this.deletedElement[0].Children.splice(this.deletedElement[1], 1);
      } else {
        elementPosition = this.service.findPosition(
          nodeToBeDeleted.Id,
          this.nestedDataSource.data
        );
        this.nestedDataSource.data.splice(elementPosition, 1);
      }
      this.refreshTreeData();
    }
  }

  // Country
  
  openDialog(action:any,obj:any) {
    obj.action = action;
    const dialogRef = this.dialogService.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj:any){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();
    
  }

  updateRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }

  deleteRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}
