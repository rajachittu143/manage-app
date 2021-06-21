import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NestedTreeControl } from "@angular/cdk/tree";
import { of as observableOf } from "rxjs";
import { TreeData } from 'src/app/shared/components/master-category/tree-data.model';
import { TreeDataService } from 'src/app/shared/components/master-category/tree-data.service';
import { TreeFunctionService } from 'src/app/shared/components/master-category/tree-function.service';

export interface PeriodicElement {
  username: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, username: 'Admin Apps' },
  { position: 2, username: 'Finance & Accounting Apps' },
  { position: 3, username: 'Human Resources Apps' },
  { position: 4, username: 'Developer Management Apps' },
  { position: 4, username: 'Consultant Management Apps' },
  { position: 4, username: 'Apps Under Alpha Trails Management Apps' },
  { position: 4, username: 'Apps Under Beta Trails' },
];

@Component({
  selector: 'app-getster-category-admin',
  templateUrl: './getster-category-admin.component.html',
  styleUrls: ['./getster-category-admin.component.css']
})
export class GetsterCategoryAdminComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'username'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);


  myForm!: FormGroup;

  
  nestedTreeControl !: NestedTreeControl<TreeData>;
  nestedDataSource !: MatTreeNestedDataSource<TreeData>;

  constructor(
    private fb: FormBuilder,
    private dataService: TreeDataService,
    private service: TreeFunctionService) {
    // this.paginator =  MatPaginator;
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.myForm = this.fb.group({
      headers: this.fb.array([{ "headerKey": "Field Name: ", "headerValue": "Company Name" },
      { "headerKey": "Field Name: ", "headerValue": "Designation" },
      { "headerKey": "Field Name: ", "headerValue": "Offical Email Id." }]),
    })

    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataService._dataChange.subscribe(
      data => (this.nestedDataSource.data = data)
    );
  }

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

  //Header

  get headerForms() {
    return this.myForm.get('headers') as FormArray
  }

  addHeader() {
    const header = this.fb.group({
      headerKey: [],
      headerValue: [],
    })
    this.headerForms.push(header);
  }

  deleteHeader(i: any) {
    if (i != 0) {
      this.headerForms.removeAt(i)
    }
  }

  public getHeaderADD(pos: any): string {
    if (0 == pos) {
      return "visible"
    } else {
      return "hidden"
    }
  }

  public getDeleteButtonVisibility(pos: any): string {
    if (0 == pos) {
      return "hidden"
    } else {
      return "visible"
    }
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.username));
  }
}
